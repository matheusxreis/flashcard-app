import React, { useEffect } from "react"
import * as Component from "./styles"
import { RadioButton } from 'react-native-paper';
import { useTheme } from "styled-components";

interface IRadioCardProps {
    title:string;
    isChecked: boolean;
};

export function RadioCard({title, isChecked}: IRadioCardProps){

const theme = useTheme()


    useEffect(()=>{
        console.log(title)
    }, [title])
    return (
        <Component.Container>
            <Component.Title> {title} </Component.Title>
            <RadioButton 
            color={theme.colors.primary}
            value={isChecked} 
            status={isChecked ? "checked" : "unchecked"}/>
        
        </Component.Container>
    )
}