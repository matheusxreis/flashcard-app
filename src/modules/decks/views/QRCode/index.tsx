import React, { useEffect, useState } from "react";
import { Modal } from "../../../../global/components/Modal";
import { Card } from "../../entities/Card";
import { Deck } from "../../entities/Deck";
import * as Component from "./styles";

import QRCodeComponent from "react-native-qrcode-svg"
import { set } from "immer/dist/internal";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native-paper";
import { useTheme } from "styled-components";

export interface QRCodeData {
    deck: Deck;
    
}

interface IQRCodeProps {
   
    data: QRCodeData;
}

export function QRCode({
    
    data
}: IQRCodeProps){

    const [qrData, setQRData] = useState<string>("");
    const cards = useSelector((x:any)=>x.cards)
    const theme = useTheme();

    function getCards(){  
              
        return cards.filter(x=>x.deckId === data.deck.id);
    }

    useEffect(()=>{
        if(data.deck.id){

            const newDeck = new Deck(
                data.deck.title,
                data.deck.id,
                data.deck.authorId,
                data.deck.authorName,
                data.deck.createdAt,
                [],
                true
            )
            console.warn("DECK ID", newDeck.id)
            const rightData = {
                deck: newDeck,
                cards: getCards()
            }
            setQRData(JSON.stringify(rightData));
        }else {
            setQRData("");
            
        }

      
    }, [data])


    return (
       
            <Component.Container>

            {qrData.length>0 ? (
                <QRCodeComponent
                size={300}
                value={qrData}
                />
            ): 
            (
                <ActivityIndicator 
                color={theme.colors.primary}
                />
            )}
            </Component.Container>
      
    )
}