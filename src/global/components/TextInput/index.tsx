import { Roboto_500Medium } from "@expo-google-fonts/roboto";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TextInputProps } from "react-native";
import { TextInput as I } from "react-native-paper";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

interface MyProps extends TextInputProps {};

export function TextInput(props: MyProps){

    const theme = useTheme();
    

    return (
        
     
        <I
        placeholderTextColor={theme.colors.primary}
        theme={{colors: { text: theme.colors.textPrimary }}}
        underlineColor={theme.colors.primary}
        activeUnderlineColor={theme.colors.primary}
        
        style={{
                
                backgroundColor: theme.colors.backgroundSecondary,
                color: theme.colors.textPrimary}}
        placeholder={props.placeholder}
        focusable={props.focusable}
        value={props.value}
        onChangeText={props.onChangeText}
        mode="flat"/>
    )
     
       
        

}