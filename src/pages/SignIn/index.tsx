import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Button";
import { PasswordInput } from "../../components/PasswordInput";
import { TextInput } from "../../components/TextInput";
import { useTranslationService } from "../../services/translation/useTranslationService";
import { useDimesion } from "../../utils/dimensions";
import * as SignInStyle from "./styles";





export function SignIn(){

  const { translation } = useTranslationService();
  const nav = useNavigation();

  function goToSignUp(){
    nav.navigate("SignUp")
  }

    return (
        <SignInStyle.Container>
     
      <SignInStyle.HalfContainer
      landscape={useDimesion().landscape}>
        <SignInStyle.Form>
        <SignInStyle.Title> {translation("signIn.title")} </SignInStyle.Title>
        <SignInStyle.Label> {translation("signIn.usernameInputLabel")} </SignInStyle.Label>
        <TextInput
        placeholder={translation("signIn.usernameInputPlaceholder")}
        focusable={false}
      />

        <SignInStyle.Label> {translation("signIn.passwordInputLabel")} </SignInStyle.Label>

        <PasswordInput
        placeholder={translation("signIn.passwordInputPlaceholder")}
        focusable={false}
      />


        <SignInStyle.ButtonContainer>
            <Button
            style={{width:RFValue(145)}}
            secondary
            title={translation("signIn.signUpButton")} 
            onPress={()=>{goToSignUp()}}/>
            <Button
            style={{width:RFValue(145)}}
            icon="login-variant"
            title={translation("signIn.signInButton")} 
            onPress={()=>{}}/>
            
        </SignInStyle.ButtonContainer>
  
        </SignInStyle.Form>
        </SignInStyle.HalfContainer>

     
      
        </SignInStyle.Container>
    )

}