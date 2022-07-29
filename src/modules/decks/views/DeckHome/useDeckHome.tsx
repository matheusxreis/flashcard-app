

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
import { addDeck, removeDeck } from "../../../../global/store/decks/actions";
import { addCard, addCards, removeCards } from "../../../../global/store/cards/actions";
import { useFileService } from "../../../../global/services/file/useFileService";
import { Snackbar } from "../../../../global/components/Snackbar";
import { deckTypes } from "../../../../global/store/decks/decksTypes";
import { Card } from "../../entities/Card";
type navType = StackNavigationProp<RootStackParamList, "DeckHome">


export function useDeckHome(){


    const { translation } = useTranslationService();
    const nav = useNavigation<navType>();
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState<string>("");
    const [openFAB, setOpenFAB] = useState<boolean>(false);
    const [filterDeck, setFilterDeck] = useState<Deck[]>([]);
    const [openModalOptions, setOpenModalOptions] = useState<boolean>(false);
    const [selectedDeck, setSelectedDeck] = useState<Deck>({} as Deck)



    const [qrCodeModal, setQRCodeModal] = useState<boolean>(false);
    const [qrCodeData, setQRCodeData] = useState<QRCodeData>({} as QRCodeData);
    const [qrLoad, setQRLoad] = useState<boolean>(false);

    const [removeModal, setRemoveModal] = useState<boolean>(false);

    const [snackbarVisible, setSnackbarVisible] = useState<boolean>(false);
    const [textSnackBar, setTextSnackBar] = useState<string>("");

    const { shareFile, getFile } = useFileService();
    const theme = useTheme();
    const decks:Deck[] = useSelector((x:any)=>x.decks);
    const cards:Card[] = useSelector((x:any)=> x.cards);


    function goToAddDeck(){
        nav.navigate("DeckAdd");
    };
    function goToAddCard(){
        nav.navigate("CardAdd");
    };
    function goToScanner(){
        nav.navigate("Scanner");
    };
    function goToPlay(deckId: string){
        

        nav.navigate("DeckPlay", { deckId })
    }

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
    };

    function handleRemoveDeck(){
        dispatch(removeDeck(selectedDeck.id));
        dispatch(removeCards(selectedDeck.id));
        setTextSnackBar("Deck removido com sucesso.")
        setSnackbarVisible(true);
    };

    function getCardsFromDeck(deckId:string){
        return cards.filter(x=>x.deckId === deckId);
    };
    async function handleShareDeck(){

        const d = new Deck(
            selectedDeck.title,
            selectedDeck.id,
            selectedDeck.authorId,
            selectedDeck.authorName,
            selectedDeck.createdAt,
            [],
            false,
            true
        );

        const saveData = {
            deck: d,
            cards: getCardsFromDeck(selectedDeck.id)
        }
    

      const deckSaved =  await shareFile({
            deckname: selectedDeck.title,
            userId: selectedDeck.authorId,
            content: JSON.stringify(saveData),
        })

        if(deckSaved){
            setTextSnackBar("O deck foi exportado com sucesso.")
            setSnackbarVisible(true);
        }else {
            setTextSnackBar("Alguma coisa deu errado")
            setSnackbarVisible(true);
        }

        setOpenModalOptions(false)
    };

    async function handleImportDeck(){
      const file = await getFile();

      if(file){

            dispatch(addCards(file.cards));
            dispatch(addDeck(file.deck));

            setTextSnackBar("Deck importado com sucesso.")
            setSnackbarVisible(true);
      }else {
            setTextSnackBar("Alguma coisa deu errado.")
            setSnackbarVisible(true);
          
      }
    };


    useEffect(()=>{
            setFilterDeck(decks);
    }, [decks]);

    useEffect(()=>{

        const a = decks?.filter( x=> x?.title.slice(0, searchValue.length).toUpperCase() === searchValue.toUpperCase());
        setFilterDeck(a);

    }, [searchValue]);

    useEffect(()=>{ console.log("aaaaaaaa", qrCodeModal)  }, [qrCodeModal])
    
    

    return {
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
        goToPlay,
        
        handleSelectDeck,
        
        openQRCode, 
        closeQRCode, 

        handleRemoveDeck, 
        
        
        handleShareDeck,

        handleImportDeck

    }



}