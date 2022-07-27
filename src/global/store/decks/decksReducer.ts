import { AnyAction } from "redux";
import { Deck } from "../../../modules/decks/entities/Deck";
import { deckTypes } from "./decksTypes";






const initialState = [] as Deck[];

export function decksReducer(state=initialState, action:AnyAction){


    switch(action.type){
        
        case deckTypes.addDeck:
            const { deck } = action.payload;
            console.log("oi", deck)
            return [
                ...state, 
                deck
            ]
       
        default:
            return state;
    };
}