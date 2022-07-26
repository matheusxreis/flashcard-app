import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { Home } from "../../pages/Home";
import { SignIn } from "../../pages/SignIn";
import { SignUp } from "../../pages/SignUp";


const Stack = createStackNavigator()

export function HomeStackRoutes(){

    const theme = useTheme()

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
               
                title: "Início"
            }}
            name="Home" 
            component={Home}/>
            
            <Stack.Screen 
            options={{
               
                title: "Login"
            }}
            name="SignIn" 
            component={SignIn}/>

            <Stack.Screen
            options={{
                title:"Registrar"
            }}
            name="SignUp"
            component={SignUp}
            />      
        </Stack.Navigator>
    )

    
}