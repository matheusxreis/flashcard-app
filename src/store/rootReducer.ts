import { AnyAction, combineReducers } from "redux";
import { themeReducer } from "./theme/themeReducer";
import { userReducer } from "./user/userReducer";




export const rootReducer = combineReducers({
                theme: themeReducer,
                user: userReducer
    })
