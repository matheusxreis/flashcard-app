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


const Stack = createStackNavigator()

export function ProfileStackRoutes(){

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
                title: translation("screens.home")
            }}
            
            name="HomeScreenLogin" 
            component={user.agreed? DeckHome : OfflineSignInInfo}/>

            <Stack.Screen
            options={{
                title: translation("screens.addDeck")
            }}
            name="DeckAdd"
            component={DeckAdd}
            />

            <Stack.Screen
            options={{
                title: translation("screens.addCard")
            }}
            name="CardAdd"
            component={CardAdd}
            />

            <Stack.Screen 
            options={{
                title: "Scanner"
            }}
            name="Scanner"
            component={Scanner}
            /> 

             <Stack.Screen 
            options={{
                title: "Play"
            }}
            name="DeckPlay"
            component={DeckPlay}
            />   

        </Stack.Navigator>
    )

    
}