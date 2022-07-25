import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { Button } from "../../components/Button";
import { PasswordInput } from "../../components/PasswordInput";
import { TextInput } from "../../components/TextInput";
import * as SignInStyle from "./styles";





export function SignIn(){



    return (
        <SignInStyle.Container>
        <SignInStyle.HalfContainer/>

     
      <SignInStyle.Form>
        <SignInStyle.Title> Bem-vindo! </SignInStyle.Title>
        <SignInStyle.Label> Username: </SignInStyle.Label>
        <TextInput
        placeholder="Type your username:"
        focusable={false}
      />

        <SignInStyle.Label> Password: </SignInStyle.Label>

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

        </SignInStyle.Container>
    )

}