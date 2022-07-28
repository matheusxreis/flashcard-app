
import React, { useEffect, useState } from "react";
import { Share, Text } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import * as Component from "./styles";
import { FAB, Portal } from "react-native-paper";
import { useTheme } from "styled-components";
import { useTranslationService } from "../../../../global/services/translation/useTranslationService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../global/RootStackParamList";
import { Deck } from "../../entities/Deck";
import { useDispatch, useSelector } from "react-redux";
import { CardDeck } from "../../../../global/components/CardDeck";
import { Modal } from "../../../../global/components/Modal";
import { getTitle } from "../../../../global/utils/getTitle";
import { QRCode, QRCodeData } from "../QRCode";
import { removeDeck } from "../../../../global/store/decks/actions";
import { removeCards } from "../../../../global/store/cards/actions";
import { useFileService } from "../../../../global/services/file/useFileService";
import { Snackbar } from "../../../../global/components/Snackbar";
import { deckTypes } from "../../../../global/store/decks/decksTypes";
import { Card } from "../../entities/Card";
import { useDeckHome } from "./useDeckHome";

type navType = StackNavigationProp<RootStackParamList, "DeckHome">

export function DeckHome(){

    const  {
        translation,
        searchValue, setSearchValue,
        openFAB, setOpenFAB,
        filterDeck, 
        openModalOptions, setOpenModalOptions,
        selectedDeck, 
        qrCodeModal, 
        qrCodeData,  
        qrLoad, 
        removeModal, setRemoveModal, 
        snackbarVisible, setSnackbarVisible,
        textSnackBar, 
        theme, 
        
        goToAddDeck,
        goToAddCard,
        goToScanner,

        handleSelectDeck,
        
        openQRCode, 
        closeQRCode, 

        handleRemoveDeck, 
        
        
        handleShareDeck,

        handleImportDeck
    } = useDeckHome();

    return (
        <Component.Container>  
        <Component.SearchContainer>
            <Searchbar 
            selectionColor={theme.colors.primary}
            iconColor={theme.colors.primary}
            underlineColorAndroid={theme.colors.primary}
            placeholder={translation("deckHome.searchInputPlaceholder")}
            value={searchValue}
            onChangeText={setSearchValue}
            />
        </Component.SearchContainer>

        <Component.DeckList
        data={filterDeck}
        renderItem={({item})=><CardDeck 
                                    handleDots={()=>handleSelectDeck(item)}
                                    item={item} />}/>
        
            <FAB.Group 
            onStateChange={()=>{setOpenFAB(!openFAB)}}
            onPress={()=>setOpenFAB(!openFAB)}
            icon={openFAB ? "minus" : "plus"}
            fabStyle={{backgroundColor: theme.colors.primary}}
            open={openFAB}
            actions={[
            {icon: "upload", label:"Importar deck", onPress:()=>{handleImportDeck()}},
            {icon: "card-plus", label:translation("deckHome.fab1"), onPress:()=>{goToAddCard()}},
            {icon: "playlist-plus", label: translation("deckHome.fab2"), onPress:()=>{goToAddDeck()}},
            {icon: "qrcode-scan", label: translation("deckHome.fab3"), onPress:()=>{goToScanner()}}
            ]}
            />
    
    {/* OPTIONS MODAL */}
       
       <Modal
       isOpen={openModalOptions}
       handleClose={()=>setOpenModalOptions(false)}
       >
            <Component.MenuContainer>
                <Component.MenuTitle> {getTitle(selectedDeck.title)} </Component.MenuTitle>
                <Component.DeckId> id: {selectedDeck.id} </Component.DeckId>

                <Component.MenuItem onPress={()=>handleShareDeck()}>
                        <Component.MenuIcon size={24} name="download" />
                        <Component.MenuItemText> {translation("deckHome.modalCard.share")} </Component.MenuItemText>
                </Component.MenuItem>
                <Component.MenuItem onPress={()=>openQRCode()}>
                        <Component.MenuIcon size={24} name="qrcode" />
                        <Component.MenuItemText> 
                            {
                            qrLoad ?                             
                            <ActivityIndicator color={useTheme().colors.primary} />
                            :
                            translation("deckHome.modalCard.qr")
                        }
                         </Component.MenuItemText>
                </Component.MenuItem>
                <Component.MenuItem onPress={()=>setRemoveModal(true)}>
                        <Component.MenuIcon size={24} name="delete" />
                        <Component.MenuItemText> {translation("deckHome.modalCard.remove")} </Component.MenuItemText>
                </Component.MenuItem>

            </Component.MenuContainer>

            {/* QR MODAL */}
       </Modal>
       
       {/* QR MODAL */}
       <Modal
        isOpen={qrCodeModal}
        handleClose={() => {closeQRCode()}}
        >
            <QRCode
            data={qrCodeData}
            />
       </Modal>

       {/* REMOVE MODAL */}

       <Modal 
       isOpen={removeModal}
       handleClose={()=>{setRemoveModal(false)}}
       >
           <Component.RemoveModalContent>
               <Component.RemoveModalTitle>
                   Excluir o deck {selectedDeck.title}?
               </Component.RemoveModalTitle>
                <Component.RemoveButtonContainer>
                     <Component.RemoveButtonConfirm 
                        onPress={()=>{setRemoveModal(false)}}
                        secondary
                        title="Cancelar"/>
                        <Component.RemoveButtonConfirm 
                        secondary
                        onPress={()=>{handleRemoveDeck(); setRemoveModal(false); setOpenModalOptions(false)}}
                        title="Confirmar"/>
                </Component.RemoveButtonContainer> 
           </Component.RemoveModalContent>
       </Modal>


       {/* SNACKBAR */}

        <Component.SnackContainer>
            <Snackbar
            visible={snackbarVisible}
            text={textSnackBar}
            onDismiss={()=>{setSnackbarVisible(false)}}
            />
        </Component.SnackContainer>
        </Component.Container>
    )
}