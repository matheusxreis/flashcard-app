import React, { useEffect } from "react";
import { RadioButton } from "react-native-paper/lib/typescript/components/RadioButton/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { RadioCard } from "../../components/RadioCard";
import { useTranslationService } from "../../services/translation/useTranslationService";
import { changeTheme } from "../../store/theme/actions";
import { possibleThemes } from "../../styles/possibleThemes";
import * as Component from "./styles"



export function Preferences(){

    const actualTheme = useSelector((x:any)=> x.theme)
    const dispatch = useDispatch();

    const languages = [
        { title: "preferences.language.ptBr", id:"pt_br"},
        { title: "preferences.language.enUs", id:"en_us"},
        { title: "preferences.language.esEs", id:"es_es"}
    ];

    const { translation, changeLanguage, actualL } = useTranslationService();

    function alterTheme(theme:number){
        dispatch(changeTheme(theme))
    };
    async function alterLanguage(l:"pt_br"|"en_us"|"es_es"){
        await changeLanguage(l);
    };

    useEffect(()=>{
        console.log(actualL);
    }, [])

    return (
        <Component.Container>

    {/* TEMA */}
                <Component.TitleListContainer>
                    <Component.TitleList> {translation("preferences.theme.title")} </Component.TitleList>
                </Component.TitleListContainer>

                <Component.PreferencesList
                data={possibleThemes}
                renderItem={({item})=><RadioCard 
                                    onPress={()=>alterTheme(item.id)}
                                    title={item.title}
                                    isChecked={item.id === actualTheme} />}
                />
    {/* IDIOMA */}
                <Component.TitleListContainer>
                    <Component.TitleList>  {translation("preferences.language.title")} </Component.TitleList>
                </Component.TitleListContainer>
                <Component.PreferencesList
                data={languages}
                renderItem={({item})=><RadioCard 
                                    onPress={()=>alterLanguage(item.id)}
                                    title={item.title}
                                    isChecked={item.id === actualL} />}
                />
        
        
        </Component.Container>
    )
}