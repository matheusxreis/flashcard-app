import React, { useState } from "react";
import { Text, TextInputProps, Image } from "react-native";
import { TextInput as I } from "react-native-paper";
import { TextInput as a } from "react-native";
import Feather from '@expo/vector-icons/Feather';
import * as Component from "./styles";

interface MyProps extends TextInputProps {};

export function PasswordInput(props: MyProps){

    const [isVisible, setIsVisible] = useState<boolean>(false);


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