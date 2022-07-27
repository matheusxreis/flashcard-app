import { AnyAction } from "redux";
import { userTypes } from "./types";





const initialState = {
    name:"",
    id:"",
    photo:""
}

export function userReducer(state = initialState, action:AnyAction){

    switch(action.type){
        case userTypes.signIn: 
        return {
            ...state,
            name: action.payload.name, 
            id: action.payload.id, 
            photo: action.payload.photo
        }
        case userTypes.signOut:
            return initialState
    }
}