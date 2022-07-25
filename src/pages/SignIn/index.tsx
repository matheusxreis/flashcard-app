import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Button";
import { PasswordInput } from "../../components/PasswordInput";
import { TextInput } from "../../components/TextInput";
import { useDimesion } from "../../utils/dimensions";
import * as SignInStyle from "./styles";





export function SignIn(){



    return (
        <SignInStyle.Container>
     
      <SignInStyle.HalfContainer
      landscape={useDimesion().landscape}>
        <SignInStyle.Form>
        <SignInStyle.Title> Faça o login! </SignInStyle.Title>
        <SignInStyle.Label> Usuário: </SignInStyle.Label>
        <TextInput
        placeholder="Type your username:"
        focusable={false}
      />

        <SignInStyle.Label> Senha: </SignInStyle.Label>

        <PasswordInput
        placeholder="Type your password:"
        focusable={false}
      />


        <SignInStyle.ButtonContainer>
            <Button
            style={{width:RFValue(145)}}
            secondary
            title="REGISTER" 
            onPress={()=>{}}/>
            <Button
            style={{width:RFValue(145)}}
            icon="login-variant"
            title="SIGN IN" 
            onPress={()=>{}}/>
        </SignInStyle.ButtonContainer>
  
        </SignInStyle.Form>
        </SignInStyle.HalfContainer>

     
      
        </SignInStyle.Container>
    )

}