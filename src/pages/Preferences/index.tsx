import React from "react";
import { RadioButton } from "react-native-paper/lib/typescript/components/RadioButton/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { RadioCard } from "../../components/RadioCard";
import { changeTheme } from "../../store/theme/actions";
import { possibleThemes } from "../../styles/possibleThemes";
import * as Component from "./styles"



export function Preferences(){

    const actualTheme = useSelector((x:any)=> x.theme)
    const dispatch = useDispatch();

    function alterTheme(theme:number){
        dispatch(changeTheme(theme))
    }
    return (
        <Component.Container>
                <Component.TitleListContainer>
                    <Component.TitleList> Tema </Component.TitleList>
                </Component.TitleListContainer>

                <Component.PreferencesList
                data={possibleThemes}
                renderItem={({item})=><RadioCard 
                                    onPress={()=>alterTheme(item.id)}
                                    title={item.title}
                                    isChecked={item.id === actualTheme} />}
                />
        
        
        </Component.Container>
    )
}