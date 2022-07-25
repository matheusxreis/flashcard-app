import React, { useState } from "react";
import { Text, TextInputProps, Image } from "react-native";
import { TextInput as I } from "react-native-paper";
import { TextInput as a } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import * as Component from "./styles";
import { useTheme } from "styled-components";

interface MyProps extends TextInputProps {};

export function PasswordInput(props: MyProps){

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const theme = useTheme()

    function getIconName():"eye"|"eye-off"{
        if(isVisible){
            return "eye-off"
        }else {
            return "eye"
        }
    }

    return (
        <Component.Container>
                <I
                 placeholderTextColor={theme.colors.primary}
                 underlineColor={theme.colors.primary}
                 activeUnderlineColor={theme.colors.primary}
                style={{ backgroundColor: theme.colors.backgroundSecondary,
                    color: theme.colors.textPrimary}}
                secureTextEntry={!isVisible}
                placeholder={props.placeholder}
                focusable={props.focusable}
                value={props.value}
                onChangeText={props.onChangeText}
                mode="flat"/>

                <Component.IconContainer
                onPress={()=>setIsVisible(!isVisible)}>
                 <Component.EyeIcon
                 name={getIconName()} />
                </Component.IconContainer>

        </Component.Container>
       
    )

}