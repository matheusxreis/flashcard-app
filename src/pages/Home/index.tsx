import { MaterialCommunityIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { useTheme } from "styled-components"
import { Button } from "../../components/Button"
import { useTranslationService } from "../../services/translation/useTranslationService"
import { useDimesion } from "../../utils/dimensions"
import * as Component from "./styles"

export function Home(){
    const nav = useNavigation();
    const theme = useTheme();

    function goToLoginPage(){
        nav.navigate("SignIn")
    };

    function goToSignUpPage(){
        console.log("a")
        nav.navigate("SignUp")
    };

    const { translation } = useTranslationService();


    return (
        <Component.Container>

           
            <Component.Greetings> FlashCardApp </Component.Greetings>
            <Component.Description> {translation("home.description")} </Component.Description>
       
            

        <Component.HalfContainer
        landscape={useDimesion().landscape}>
            
        <Component.WoudLikeUpgrade>
            {translation("home.whatYouThink")}
        </Component.WoudLikeUpgrade>
        <MaterialCommunityIcons
        name="brain"
        size={190}
        color={theme.colors.primary}
        />
        {/* <Image
        style={{
            height: 200,
            width: 300,
        }}
        source={require("../../imgs/brain2.png")}
        /> */}
        

        <Component.WrapperHalf>

        <Component.ButtonContainer>
            <Button
            style={{ width: RFValue(250)}}
            title={translation("home.signInButton")}
            onPress={()=>goToLoginPage()}
            />
            <Button
            style={{ width: RFValue(250)}}
            title={translation("home.signUpButton")}
            secondary
            
            onPress={()=>goToSignUpPage()}
            />
            <Button
            style={{ width: RFValue(250)}}
            title={translation("home.offlineButton")}
            secondary
            onPress={()=>{}}
            />
        </Component.ButtonContainer>
        <Button  style={{ 

                width: RFValue(250)}}
            title={translation("home.githubButton")}
            secondary
            icon="github"
            onPress={()=>{}}
            />
        </Component.WrapperHalf>



        </Component.HalfContainer>

        </Component.Container>
    )
}