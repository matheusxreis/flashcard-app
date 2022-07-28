





import { AnyAction } from "redux";
import { Card } from "../../../modules/decks/entities/Card";
import { cardTypes } from "./cardsTypes";






const initialState = [] as Card[];

export function cardsReducer(state=initialState, action:AnyAction){


    switch(action.type){
        
        case cardTypes.addCard:
            const { card } = action.payload;

            return [...state, 
            card]
        case cardTypes.addCards:
            const { cards } = action.payload;
            if(cards.length){
            console.log("cards reducer", state.concat(cards))
            return state.concat(cards)
            }
            return state
        case cardTypes.removeCards:
            const { deckId } = action.payload;

            return state.filter(x=>x.deckId!==deckId);
        default:
            return state;
    };
}