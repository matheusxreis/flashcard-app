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
    secondary?: boolean;
    disable?:boolean;
    icon?:string;
    colorText?: string;
}

export function Button({title, onPress, icon, secondary = false, disable = false, colorText, ...rest}:IButton){

    const theme = useTheme(); 
    function getButtonMode(){
        if(secondary){
            return "outlined"
        }else {
            return "contained"
        }
    }

    return (
            <B 
            {...rest}
            
            color={disable ? theme.colors.textTertiary : theme.colors.primary}
            mode={getButtonMode()}  
            onPress={disable ? ()=>{} : onPress}
           

            >
             {secondary === false ? (
                   <>
                 <MaterialCommunityIcons
                 color={"#fff"}
                 size={20}
                 name={icon||""}/>
                <Text style={{color: colorText}}> {title} </Text>
                </>   
             ):(
                 <>
             <MaterialCommunityIcons
                 color={theme.colors.primary}
                 size={20}
                 name={icon||""}/>
             <Text style={{color: colorText}}> {title} </Text>  
             </>)}
            </B>
    )
}