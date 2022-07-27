import { Card } from "../../../modules/decks/entities/Card";
import { cardTypes } from "./cardsTypes";

export function addCard(card: Card){
    
    return {
        type: cardTypes.addCard,
        payload: {
            card: card
        }
    }
}