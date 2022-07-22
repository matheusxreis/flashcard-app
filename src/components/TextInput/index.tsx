import { Text, TextInputProps } from "react-native";
import { TextInput as I } from "react-native-paper";

interface MyProps extends TextInputProps {};

export function TextInput(props: MyProps){

    

    return (
     
        <I
        placeholder={props.placeholder}
        focusable={props.focusable}
        value={props.value}
        onChangeText={props.onChangeText}
        mode="flat"/>

       
    )

}