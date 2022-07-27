import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import {Text} from "react-native";
import { useTheme } from "styled-components";
import { Deck } from "../../../modules/decks/entities/Deck";
import { Button } from "../Button";
import * as Component from "./styles";

interface ICardDeck {
    item: Deck
}

export function CardDeck({item}: ICardDeck){

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
            <Component.DotsContainer>
                <MaterialCommunityIcons
                name="dots-vertical"
                color={theme.colors.textPrimary}
                size={25}
                />
            </Component.DotsContainer>
        </Component.Container>

    )

}