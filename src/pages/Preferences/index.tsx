import React from "react";
import { RadioButton } from "react-native-paper/lib/typescript/components/RadioButton/RadioButton";
import { RadioCard } from "../../components/RadioCard";
import * as Component from "./styles"

interface IPossibleTheme {
    title: string;
}

const theme: IPossibleTheme[] = [
    { title: "Planicie (padrão/light)"},
    { title: "Pântano (dark)"},
    { title: "Montanha"},
    { title: "Floresta"},
    { title: "Ilha"}
]


export function Preferences(){

    

    return (
        <Component.Container>
                <Component.TitleListContainer>
                    <Component.TitleList> Tema </Component.TitleList>
                </Component.TitleListContainer>

                <Component.PreferencesList
                data={theme}
                renderItem={({item})=><RadioCard title={item.title} isChecked={false} />}
                />
        
        
        </Component.Container>
    )
}