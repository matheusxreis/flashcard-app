import React from "react";
import { Snackbar as Snack } from "react-native-paper";
import { useTheme } from "styled-components";


interface ISnackbarProps {
    visible:boolean;
    text:string;
    onDismiss?:()=>void;
    undo?: boolean
}

export function Snackbar({
    visible, text, onDismiss, undo
}: ISnackbarProps){

    const theme = useTheme();

    return (
        <Snack
        onDismiss={onDismiss} 
        duration={2500}
        width={'100%'}
        visible={visible}
        >
            {text}
        </Snack>
    )}