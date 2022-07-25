import { Text, TextInputProps } from "react-native";
import { TextInput as I } from "react-native-paper";
import { useTheme } from "styled-components";

interface MyProps extends TextInputProps {};

export function TextInput(props: MyProps){

    const theme = useTheme();
    

    return (
     
        <I
        underlineColor={theme.colors.primary}
        activeUnderlineColor={theme.colors.primary}
        style={{backgroundColor: theme.colors.backgroundSecondary,
                color: theme.colors.textPrimary}}
        placeholder={props.placeholder}
        focusable={props.focusable}
        value={props.value}
        onChangeText={props.onChangeText}
        mode="flat"/>

       
    )

}