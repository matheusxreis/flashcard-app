import { Deck } from "../../../modules/decks/entities/Deck";
import { deckTypes } from "./decksTypes";



export function addDeck(deck: Deck){

    return {
        type: deckTypes.addDeck,
        payload: {deck:deck}
    }
}