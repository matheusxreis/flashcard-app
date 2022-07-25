import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
    key:"flashcardapp",
    storage: AsyncStorage

}


const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = configureStore({reducer: persistedReducer});
const persistor = persistStore(store);

export { store, persistor }
