





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
        default:
            return state;
    };
}