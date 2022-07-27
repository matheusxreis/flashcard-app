import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Provider } from "react-native-paper";
import { useTheme } from "styled-components";
import { Deck } from "../../../modules/decks/entities/Deck";
import * as Component from "./styles";

interface ICardDeck {
    item: Deck;
    handleDots:()=>void;
}

export function CardDeck({item, handleDots}: ICardDeck){

    const theme = useTheme();

    function getTitle(){
        if(item.title.length>8){
            return item.title.slice(0, 8) + "..."
        }
        return item.title
    }
    return (
        <Component.Container>

          

            <Component.TextContainer>
                <Component.Title> {getTitle()} </Component.Title>
                <Component.CardAmount> Cards: {item.cards?.length || 0} </Component.CardAmount>
            </Component.TextContainer>
            <Component.DotsContainer
            onPress={handleDots}>
                <MaterialCommunityIcons
                name="dots-vertical"
                color={theme.colors.textPrimary}
                size={25}
                />
            </Component.DotsContainer>
         

            
        </Component.Container>

    )

}