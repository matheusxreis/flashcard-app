
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import * as Component from "./styles";
import { FAB, Portal } from "react-native-paper";
import { useTheme } from "styled-components";
import { useTranslationService } from "../../../../global/services/translation/useTranslationService";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../global/RootStackParamList";
import { Deck } from "../../entities/Deck";
import { useSelector } from "react-redux";
import { CardDeck } from "../../../../global/components/CardDeck";
import { Modal } from "../../../../global/components/Modal";
import { getTitle } from "../../../../global/utils/getTitle";
import { QRCode, QRCodeData } from "../QRCode";

type navType = StackNavigationProp<RootStackParamList, "DeckHome">

export function DeckHome(){

    const { translation } = useTranslationService();
    const nav = useNavigation<navType>()

    const [searchValue, setSearchValue] = useState<string>("");
    const [openFAB, setOpenFAB] = useState<boolean>(false);
    const [filterDeck, setFilterDeck] = useState<Deck[]>([]);
    const [openModalOptions, setOpenModalOptions] = useState<boolean>(false);
    const [selectedDeck, setSelectedDeck] = useState<Deck>({} as Deck)



    const [qrCodeModal, setQRCodeModal] = useState<boolean>(false);
    const [qrCodeData, setQRCodeData] = useState<QRCodeData>({} as QRCodeData);
    const [qrLoad, setQRLoad] = useState<boolean>(false);


    const theme = useTheme();
    const decks:Deck[] = useSelector((x:any)=>x.decks);


    function goToAddDeck(){
        nav.navigate("DeckAdd");
    };
    function goToAddCard(){
        nav.navigate("CardAdd");
    };
    function goToScanner(){
        nav.navigate("Scanner");
    };

    function handleSelectDeck(deck:Deck){
        setSelectedDeck(deck);
        setOpenModalOptions(true);
    };

    function openQRCode(){
        setQRLoad(true);
        
        setQRCodeModal(true);
        setQRCodeData({
            deck: selectedDeck
        });

        //setQRLoad(false);

    };

    function closeQRCode(){
        setQRLoad(false);
        setQRCodeModal(false);
    }

    useEffect(()=>{
            setFilterDeck(decks);
    }, [decks]);

    useEffect(()=>{

        const a = decks?.filter( x=> x?.title.slice(0, searchValue.length).toUpperCase() === searchValue.toUpperCase());
        setFilterDeck(a);

    }, [searchValue]);

    useEffect(()=>{ console.log("aaaaaaaa", qrCodeModal)  }, [qrCodeModal])
    
    

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

                <Component.MenuItem>
                        <Component.MenuIcon size={24} name="share" />
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
                <Component.MenuItem>
                        <Component.MenuIcon size={24} name="delete" />
                        <Component.MenuItemText> {translation("deckHome.modalCard.remove")} </Component.MenuItemText>
                </Component.MenuItem>

            </Component.MenuContainer>
       </Modal>
        <Modal
        isOpen={qrCodeModal}
        handleClose={() => {closeQRCode()}}
        >
            <QRCode
            data={qrCodeData}
            />
       </Modal>
        </Component.Container>
    )
}