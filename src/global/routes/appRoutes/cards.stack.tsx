import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { Preferences } from "../../../modules/preferences/views/Preferences";
import { SignIn } from "../../../modules/auth/views/SignIn";
import { OfflineSignInInfo } from "../../../modules/auth/views/OfflineSignInInfo";
import { useTranslationService } from "../../services/translation/useTranslationService";
import { useSelector } from "react-redux";
import { DeckHome } from "../../../modules/decks/views/DeckHome";
import { DeckAdd } from "../../../modules/decks/views/DeckAdd";
import { CardAdd } from "../../../modules/decks/views/CardAdd";
import { Scanner } from "../../../modules/decks/views/Scanner";
import { DeckPlay } from "../../../modules/decks/views/DeckPlay";
import { CardList } from "../../../modules/decks/views/CardList";


const Stack = createStackNavigator()

export function CardStackRoutes(){

    const theme = useTheme();
    const { translation } = useTranslationService();
    const user = useSelector((x:any)=>x.user)



    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:true,
            headerTintColor: theme.colors.textPrimary,
            headerStyle: {
                backgroundColor: theme.colors.backgroundSecondary
            }
        }}>
            
            <Stack.Screen 
            options={{
                title: translation("screens.cards")
            }}
            name="CardsList" 
            component={CardList}/>

           

        </Stack.Navigator>
    )

    
}