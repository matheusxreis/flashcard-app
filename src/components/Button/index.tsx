import React from "react";
import { ButtonProps } from "react-native";
import { Button as B } from 'react-native-paper';


interface IButton extends ButtonProps {
    onPress:()=>void;
    title: string;
    secondary?: boolean;
    icon?:string;
}

export function Button({title, onPress, icon, secondary = false, ...rest}:IButton){


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
            color="#397AF9"
            icon={icon || ""}
            mode={getButtonMode()}  
            onPress={onPress}
            >
                {title}
            </B>
    )
}