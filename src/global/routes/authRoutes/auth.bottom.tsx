
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { SignIn } from "../../../modules/auth/views/SignIn";
import { HomeStackRoutes } from "./home.stack";
import { ConfigStackRoutes } from "./config.stack.tsx";
import { useTranslationService } from "../../services/translation/useTranslationService";


const Bottom = createMaterialBottomTabNavigator();


export function BottomAuthRoutes(){

    const theme = useTheme();
    const { translation } = useTranslationService();


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
        initialRouteName="Home">
            <Bottom.Screen 
            name={"Home"}
            component={HomeStackRoutes}

            options={{
                title:translation("screens.home"),
                tabBarIcon: ({color})=>(
                      <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={26}
                      />
                )
            }}      />
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