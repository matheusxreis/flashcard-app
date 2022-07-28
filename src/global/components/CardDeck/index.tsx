import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Modal, Provider } from "react-native-paper";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Deck } from "../../../modules/decks/entities/Deck";
import * as Component from "./styles";
import { Text } from 'react-native'

interface ICardDeck {
    item: Deck;
    handleDots:()=>void;
}

export function CardDeck({item, handleDots}: ICardDeck){

    const theme = useTheme();
    const cards = useSelector((x:any)=>x.cards);

    function getTitle(){
        if(item?.title?.length>8){
            return item.title.slice(0, 8) + "..."
        }
        return item.title
    }

    function getAmountCards(){

        const amount = cards.filter(x=>x.deckId === item.id).length;
       //     cards.map(x=>console.log(x.deckId, item))
     //   console.log(cards.length, "QUANTIDADE DE CARDS")
        return amount
    }


    return (
        <Component.Container>

          

            <Component.TextContainer>

            <Component.TitleContainer>
                <Component.Title> {getTitle()} </Component.Title>
                {item.shared && (
                    <MaterialCommunityIcons 
                    name="qrcode"
                    color={theme.colors.primary}
                    size={18}
                    />
                )}
                {item.imported && (
                    <MaterialCommunityIcons 
                    name="download"
                    color={theme.colors.primary}
                    size={18}
                    />
                )}
            </Component.TitleContainer>
                <Component.CardAmount> Cards: {getAmountCards()} </Component.CardAmount>
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