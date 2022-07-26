import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";

import { useTranslation } from "react-i18next";

export function useTranslationService(){

    const [actualL, setActualL] = useState<"pt_br"|"en_us"|"es_es">("pt_br");

    const { t, i18n } = useTranslation();



    function translation(key:string){
        return t(key);
    };

    async function changeLanguage(language:"pt_br"|"en_us"|"es_es"){


        await AsyncStorage.setItem("@flashcardapp:language", language);
        setActualL(language);
        i18n.changeLanguage(language);
    };


    async function actualLanguage(){
        return await AsyncStorage.getItem("@flashcardapp:language") || "pt_br"
    }

    return {
        translation,
        changeLanguage,
        actualLanguage,
        actualL
    };



};