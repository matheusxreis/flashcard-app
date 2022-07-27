
import React, { useState } from "react";
import { Text } from "react-native";
import { Searchbar } from "react-native-paper";
import * as Component from "./styles";
import { FAB, Portal } from "react-native-paper";
import { useTheme } from "styled-components";
import { useTranslationService } from "../../services/translation/useTranslationService";

export function DeckHome(){

    const { translation } = useTranslationService();

    const [searchValue, setSearchValue] = useState<string>("");
    const [openFAB, setOpenFAB] = useState<boolean>(false);

    const theme = useTheme();

    return (
        <Component.Container>  
        <Component.SearchContainer>
            <Searchbar 
            placeholder={translation("deckHome.searchInputPlaceholder")}
            value={searchValue}
            onChangeText={setSearchValue}
            />
        </Component.SearchContainer>
        
            <FAB.Group 
            onStateChange={()=>{setOpenFAB(!openFAB)}}
            onPress={()=>setOpenFAB(!openFAB)}
            icon={openFAB ? "minus" : "plus"}
            fabStyle={{backgroundColor: theme.colors.primary}}
            open={openFAB}
            actions={[
            {icon: "card-plus", label:translation("deckHome.fab1"), onPress:()=>{}},
            {icon: "playlist-plus", label: translation("deckHome.fab2"), onPress:()=>{}},
            {icon: "qrcode-scan", label: translation("deckHome.fab3"), onPress:()=>{}}
            ]}
            />
    
       
        </Component.Container>
    )
}