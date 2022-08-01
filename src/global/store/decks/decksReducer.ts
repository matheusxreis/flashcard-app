import { AnyAction } from "redux";
import { Deck } from "../../../modules/decks/entities/Deck";
import { deckTypes } from "./decksTypes";






const initialState = [] as Deck[];

export function decksReducer(state=initialState, action:AnyAction){


    switch(action.type){
        
        case deckTypes.addDeck:
            const { deck } = action.payload;

            const nameAlreadyExist = state.filter(x=>x.title.slice(0, deck.title.length) === deck.title );

            if(nameAlreadyExist.length){
                console.log(
                    nameAlreadyExist,
                    deck.title.slice(0, nameAlreadyExist[0].title.length+1)
                )
                deck.title = deck.title+`(${nameAlreadyExist.length})`;
            }

            return [
                ...state, 
                deck
            ]
        case deckTypes.removeDeck:
            const { deckId } = action.payload;
            return state.filter(x=>x.id !== deckId);
       
        default:
            return state;
    };
}