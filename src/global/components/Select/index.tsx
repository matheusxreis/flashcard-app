import React from "react";
import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TextInputProps } from "react-native";
import { TextInput as I } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

import * as Component from "./styles";

interface MyProps {
    value:string,
    onPress:()=>void;
};

export function Select(props: MyProps){

    const theme = useTheme();
    

    return (
        
        <Component.Container onPress={()=>props.onPress()}>

             <Component.Value> {props.value }</Component.Value>
             <Component.DownIcon name="arrow-down-thin" size={26}/>
      
         </Component.Container>
       
        )

}