import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

type pLanguages = "pt_br"|"en_us"|"es_es"


async function language():Promise<pLanguages>{
   return await AsyncStorage.getItem("@flashcardapp:language") as pLanguages|| "pt_br"
}

export function useTranslationService(){

    const [actualL, setActualL] = useState<pLanguages>("pt_br");

    const { t, i18n } = useTranslation();

    
    
    function translation(key:string){
        return t(key);
    };
    
    async function changeLanguage(language:"pt_br"|"en_us"|"es_es"){
        
        
        await AsyncStorage.setItem("@flashcardapp:language", language);
        const c = await AsyncStorage.getItem("@flashcardapp:language") 
        setActualL(language);
        i18n.changeLanguage(language);
    };
    
    
    async function actualLanguage(){
        return await AsyncStorage.getItem("@flashcardapp:language") 
    };
    
    useEffect(()=>{
        language().then(x=> setActualL(x));
    },[]);

    return {
        translation,
        changeLanguage,
        actualLanguage,
        actualL
    };



};