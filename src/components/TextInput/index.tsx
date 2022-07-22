import { Text, TextInputProps } from "react-native";
import { TextInput as I } from "react-native-paper";

interface MyProps extends TextInputProps {};

export function TextInput(props: MyProps){

    

    return (
     
        <I
        underlineColor="#397AF9"
        activeUnderlineColor="#397AF9"
        style={{backgroundColor: "#fff"}}
        placeholder={props.placeholder}
        focusable={props.focusable}
        value={props.value}
        onChangeText={props.onChangeText}
        mode="flat"/>

       
    )

}