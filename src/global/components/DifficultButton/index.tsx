import React from "react";
import { ButtonProps, View } from "react-native";
import { Button as B } from 'react-native-paper';
import { useTheme } from "styled-components";
import { Text } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { theme } from "../../styles/theme";

interface IButton extends ButtonProps {
    onPress:()=>void;
    title: string;
    difficult: "easy" | "hard" | "ok"
}

export function DifficultButton({title, onPress, difficult, ...rest}:IButton){

    const theme = useTheme(); 
   

    function getTextColor(){
        if(difficult === "easy") { return theme.colors.success };
        if(difficult === "hard") { return theme.colors.error };
        if(difficult === "ok") { return theme.colors.ok };
    }

    function getIcon(){
        if(difficult === "easy") { return "emoticon-cool" };
        if(difficult === "hard") { return "emoticon-sad" };
        if(difficult === "ok") { return "emoticon-neutral" };
    
    }

    return (
            <B 
            {...rest}
            
            icon={getIcon()}
            color={getTextColor()}
            mode={"outlined"}  
            onPress={onPress}
            >
             
             <Text style={{color: getTextColor()}}> {title} </Text>  
          
            </B>
    )
}