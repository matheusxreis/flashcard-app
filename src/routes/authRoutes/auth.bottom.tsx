
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { useTheme } from "styled-components";
import { SignIn } from "../../pages/SignIn";
import { HomeStackRoutes } from "./home.stack";
import { ConfigStackRoutes } from "./config.stack.tsx";


const Bottom = createMaterialBottomTabNavigator();


export function BottomAuthRoutes(){

    const theme = useTheme();
    return (
      
        <Bottom.Navigator
        screenOptions={{
            headerShown: true,
        }}
                       shifting
        inactiveColor={theme.colors.backgroundPrimary}
        activeColor={theme.colors.primary}
        barStyle={{ 
            
            backgroundColor: theme.colors.backgroundSecondary}}
        initialRouteName="Home">
            <Bottom.Screen 
            name="Home"
            component={HomeStackRoutes}

            options={{
                title:"Home",
                tabBarIcon: ({color})=>(
                      <MaterialCommunityIcons
                      name="home"
                      color={color}
                      size={26}
                      />
                )
            }}      />
            <Bottom.Screen 
            name="Configurations"
            component={ConfigStackRoutes}
            options={{
                title:"Configurações",
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