import { use } from "i18next";
import React from "react";
import { Snackbar as Snack } from "react-native-paper";
import { useTheme } from "styled-components";

interface undo {
    is: boolean,
    label: string,
    onPress: ()=>void;
}

interface ISnackbarProps {
    visible:boolean;
    text:string;
    onDismiss?:()=>void;
    undo?: undo
}

export function Snackbar({
    visible, text, onDismiss, undo
}: ISnackbarProps){

    const theme = useTheme();

    return (
        <Snack
        onDismiss={onDismiss} 
        duration={2500}
        theme={{colors: { accent: theme.colors.primary }}}
        width={'100%'}
        visible={visible}
        action={ undo?.is && {
            label: undo.label,
            onPress: undo.onPress
        }}
        >
            {text}
        </Snack>
    )}