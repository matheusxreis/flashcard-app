import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { RadioButton } from "react-native-paper/lib/typescript/components/RadioButton/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { CardItem } from "../../components/CardItem";
import { RadioCard } from "../../components/RadioCard";
import { useTranslationService } from "../../services/translation/useTranslationService";
import { changeTheme } from "../../store/theme/actions";
import { signOut } from "../../store/user/actions";
import { possibleThemes } from "../../styles/possibleThemes";
import * as Component from "./styles"



export function Preferences(){

    const actualTheme = useSelector((x:any)=> x.theme);
    const user = useSelector((x:any)=>x.user);
    const dispatch = useDispatch();
    const nav = useNavigation();

    const languages = [
        { title: "preferences.language.ptBr", id:"pt_br"},
        { title: "preferences.language.enUs", id:"en_us"},
        { title: "preferences.language.esEs", id:"es_es"}
    ];

    const session = [
        { title: "Sair" }
    ]

    const { translation, changeLanguage, actualL } = useTranslationService();

    function alterTheme(theme:number){
        dispatch(changeTheme(theme))
    };
    async function alterLanguage(l:"pt_br"|"en_us"|"es_es"){
        await changeLanguage(l);
    };
    async function logOut(){
        dispatch(signOut());
        nav.goBack()
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
        
         {/* SESSÃO */}

         {user?.id.length>0 && (
             <>
                <Component.TitleListContainer>
                <Component.TitleList>  Sessão </Component.TitleList>
                </Component.TitleListContainer>
                <Component.PreferencesList
                data={session}
                renderItem={({item})=><CardItem 
                                onPress={()=>logOut()}
                                title={item.title}
                                />}
                />
            </>
         )}
        
        
        </Component.Container>
    )
}