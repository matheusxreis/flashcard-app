import React from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "react-native-paper";

import * as Component from "./styles";
import { Button } from "../../components/Button";
import { useTheme } from "styled-components";
import { signOut } from "../../store/user/actions";
import { useTranslationService } from "../../services/translation/useTranslationService";

export function OfflineSignInInfo(){




    const user = useSelector((x:any)=>x.user);
    const theme = useTheme();
    const dispatch = useDispatch();

    const { translation } = useTranslationService();


    function handleLogOut(){
        dispatch(signOut())
    }

    function returnImage(): "1" {
        return user.photo || "1"
    }

    return (
        <Component.Container>
        <Component.TitleContainer>
            <Component.Title>
                {translation("offlineSignInInfo.welcome")}
            </Component.Title>
            <Component.Name>
                {user.name}.
            </Component.Name>
        </Component.TitleContainer>

        <Avatar.Image
        size={200}
        style={{backgroundColor: theme.colors.primary }}
        source={require(`../../assets/avatars/`+ `2` +`.jpg`)}/>

            <Component.Details>
                {translation("offlineSignInInfo.details1")}       
               {'\n'}
               {translation("offlineSignInInfo.details2")}        
               {'\n'}
               {translation("offlineSignInInfo.details3")}       
               {'\n'}
               {translation("offlineSignInInfo.details4")}       
            </Component.Details>

            <Component.ButtonContainer>
            <Button
            secondary
            title= {translation("offlineSignInInfo.cancelButton")}       
            onPress={()=>{handleLogOut()}} 
            />
            <Button
            title= {translation("offlineSignInInfo.continueButton")}       
            onPress={()=>{}} 
            />
            </Component.ButtonContainer>
        </Component.Container>
    )
}