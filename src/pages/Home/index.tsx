import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Image } from "react-native"
import { RFValue } from "react-native-responsive-fontsize"
import { Button } from "../../components/Button"
import { useDimesion } from "../../utils/dimensions"
import * as Component from "./styles"

export function Home(){
    const nav = useNavigation()

    function goToLoginPage(){
        nav.navigate("SignIn")
    }
    return (
        <Component.Container>

           
            <Component.Greetings> FlashCardApp </Component.Greetings>
            <Component.Description> Aplicativo de FlashCards, 100% brasileiro. </Component.Description>
       
            

        <Component.HalfContainer
        landscape={useDimesion().landscape}>
            
        <Component.WoudLikeUpgrade>
            O que acha de dar um upgrade na memória e nos estudos?
        </Component.WoudLikeUpgrade>
        <Image
        style={{
            height: 200,
            width: 200,
        }}
        source={require("../../imgs/brain.jpg")}
        />
        

        <Component.WrapperHalf>

        <Component.ButtonContainer>
            <Button
            style={{ width: RFValue(250)}}
            title="Já tem uma conta?"
            onPress={()=>goToLoginPage()}
            />
            <Button
            style={{ width: RFValue(250)}}
            title="É novo aqui?"
            secondary
            onPress={()=>{}}
            />
        </Component.ButtonContainer>
        <Button  style={{ 

                width: RFValue(250)}}
            title="Contribuir no github"
            secondary
            icon="github"
            onPress={()=>{}}
            />
        </Component.WrapperHalf>



        </Component.HalfContainer>

        </Component.Container>
    )
}