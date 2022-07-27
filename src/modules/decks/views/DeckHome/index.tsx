
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Searchbar } from "react-native-paper";
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

type navType = StackNavigationProp<RootStackParamList, "DeckHome">

export function DeckHome(){

    const { translation } = useTranslationService();
    const nav = useNavigation<navType>()

    const [searchValue, setSearchValue] = useState<string>("");
    const [openFAB, setOpenFAB] = useState<boolean>(false);
    const [filterDeck, setFilterDeck] = useState<Deck[]>([]);

    const theme = useTheme();
    const decks:Deck[] = useSelector((x:any)=>x.decks);


    function goToAddDeck(){
        nav.navigate("DeckAdd");
    }

    useEffect(()=>{
            setFilterDeck(decks)
    }, [decks])

    useEffect(()=>{

        const a = decks.filter( x=> x.title.slice(0, searchValue.length).toUpperCase() === searchValue.toUpperCase());
        setFilterDeck(a)

    }, [searchValue])

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
        renderItem={({item})=><CardDeck item={item} />}        />
        
            <FAB.Group 
            onStateChange={()=>{setOpenFAB(!openFAB)}}
            onPress={()=>setOpenFAB(!openFAB)}
            icon={openFAB ? "minus" : "plus"}
            fabStyle={{backgroundColor: theme.colors.primary}}
            open={openFAB}
            actions={[
            {icon: "card-plus", label:translation("deckHome.fab1"), onPress:()=>{}},
            {icon: "playlist-plus", label: translation("deckHome.fab2"), onPress:()=>{goToAddDeck()}},
            {icon: "qrcode-scan", label: translation("deckHome.fab3"), onPress:()=>{}}
            ]}
            />
    
       
        </Component.Container>
    )
}