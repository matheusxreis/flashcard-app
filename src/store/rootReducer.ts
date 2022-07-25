import { AnyAction, combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducer";

const initialState = {
    theme: 1
}



export const rootReducer = combineReducers({
                theme: themeReducer
    })
