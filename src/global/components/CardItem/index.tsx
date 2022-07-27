import React, { useEffect } from "react"
import * as Component from "./styles"
import { useTheme } from "styled-components";
import { useTranslationService } from "../../services/translation/useTranslationService";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface IRadioCardProps {
    title:string;
    onPress:()=>void;
};

export function CardItem({title, onPress}: IRadioCardProps){

    const theme = useTheme();
   
    const { translation } = useTranslationService();

    
    return (
        <Component.Container
        onPress={()=>onPress()}>
            <Component.Title> {title} </Component.Title>
            <MaterialCommunityIcons
            size={18}
            style={{paddingTop: 25}}
            name="arrow-right"
            color={theme.colors.textPrimary}
            />
        
        </Component.Container>
    )
}