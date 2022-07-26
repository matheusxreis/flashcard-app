import { AnyAction, combineReducers } from "redux";
import { cardsReducer } from "./cards/cardsReducer";
import { decksReducer } from "./decks/decksReducer";
import { themeReducer } from "./theme/themeReducer";
import { userReducer } from "./user/userReducer";




export const rootReducer = combineReducers({
                theme: themeReducer,
                user: userReducer,
                decks: decksReducer,
                cards: cardsReducer
    })
