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

export function addCards(cards:Card[]){

    return {
        type: cardTypes.addCards,
        payload: {
            cards: cards
        }
    }
}


export function removeCards(deckId: string){
    return {
        type: cardTypes.removeCards,
        payload: { deckId: deckId }
    }
}


export function cardWasSeen(cardId:string){

    return {
        type: cardTypes.cardWasSeen,
        payload: { cardId: cardId }
    }
}

export function removeCard(id:string){

    return {
        type: cardTypes.removeCard,
        payload: { id: id }
    }
}