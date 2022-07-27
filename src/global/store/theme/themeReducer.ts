import { State } from "react-native-gesture-handler";
import { AnyAction } from "redux";
import { themeTypes } from "./types";





export function themeReducer(initialState = 1, action:AnyAction){

    switch(action.type){
        case themeTypes.changeTheme: 
        return action.payload.theme;
        
        default: 
        return initialState;
    }
}