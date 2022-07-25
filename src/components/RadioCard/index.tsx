import React, { useEffect } from "react"
import * as Component from "./styles"
import { RadioButton } from 'react-native-paper';
import { useTheme } from "styled-components";
import { useDispatch } from "react-redux";
import { changeTheme } from "../../store/theme/actions";

interface IRadioCardProps {
    title:string;
    isChecked: boolean;
    onPress:()=>void;
};

export function RadioCard({title, isChecked, onPress}: IRadioCardProps){

    const theme = useTheme();
   


    
    return (
        <Component.Container
        onPress={()=>onPress()}>
            <Component.Title> {title} </Component.Title>
            <RadioButton 
             onPress={()=>onPress()}
            color={theme.colors.primary}
            value={isChecked} 
            status={isChecked ? "checked" : "unchecked"}/>
        
        </Component.Container>
    )
}