import { CardStyleInterpolators } from "@react-navigation/stack";
import { store } from "..";
import { Card } from "../../../modules/decks/entities/Card";
import { Deck } from "../../../modules/decks/entities/Deck";
import { deckTypes } from "./decksTypes";



export function addDeck(deck: Deck){

    
    return {
        type: deckTypes.addDeck,
        payload: {deck:deck}
    }
}


export function removeDeck(deckId: string){

    return {
        type: deckTypes.removeDeck,
        payload: { deckId: deckId }
    }
}

