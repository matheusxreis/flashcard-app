import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Badge, Modal, Provider } from "react-native-paper";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Deck } from "../../../modules/decks/entities/Deck";
import * as Component from "./styles";
import { Text } from 'react-native'
import { Card } from "../../../modules/decks/entities/Card";

interface ICardDeck {
    item: Deck;
    handleDots:()=>void;
    handleGo:()=>void;
}

export function CardDeck({item, handleDots, handleGo}: ICardDeck){

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

    function getNewCards(){
        const cardsFromDeck:Card[] = cards.filter(x=>x.deckId === item.id);
        const notSeen = cardsFromDeck.filter(x=>x.seen===false).length;

        return notSeen;
    }


    return (
        <Component.Container onPress={()=>handleGo()}>

          

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
                {getNewCards()>0 && (
                    <Component.BadgeContainer>
                        <Badge 
                        style={{justifyContent: 'center'}}
                        size={14}
                        >
                            {getNewCards()}
                        </Badge>
                    </Component.BadgeContainer>
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