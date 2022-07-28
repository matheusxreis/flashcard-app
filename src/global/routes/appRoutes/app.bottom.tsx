
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { SignIn } from "../../../modules/auth/views/SignIn";
import { ConfigStackRoutes } from "../authRoutes/config.stack.tsx";
import { useTranslationService } from "../../services/translation/useTranslationService";
import { ProfileStackRoutes } from "./profile.stack";
import { useSelector } from "react-redux";


const Bottom = createMaterialBottomTabNavigator();


export function BottomAppRoutes(){

    const theme = useTheme();
    const { translation } = useTranslationService();
    const cards = useSelector((x:any)=>x.cards);

    function notifications(){
        return cards.filter(x=>x.seen === false).length
    }


    return (
      
        <Bottom.Navigator
        screenOptions={{
            headerShown: true,
        }}
        shifting
        inactiveColor={theme.colors.textTertiary}
        activeColor={theme.colors.primary}
            barStyle={{ 
            backgroundColor: theme.colors.backgroundSecondary}}
            initialRouteName="AppRoutes">


            <Bottom.Screen 
            name={"AppRoutes"}
            component={ProfileStackRoutes}
        
            options={{
                tabBarBadge:notifications(),
                title:translation("screens.home"),
                tabBarIcon: ({color})=>(
                      <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={26}
                      />
                )
            }}/>

            <Bottom.Screen 
            name={"Settings"}
            component={ConfigStackRoutes}
            options={{
                title:translation("screens.settings"),
                tabBarIcon: ({color})=>(
                      <MaterialCommunityIcons
                      name="cog"
                      color={color}
                      size={26}
                      />
                )
            }} />
        </Bottom.Navigator>
    )

}