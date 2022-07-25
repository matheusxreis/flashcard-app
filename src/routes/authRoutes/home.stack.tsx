import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { SignIn } from "../../pages/SignIn";


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
               
                title: "Login"
            }}
            name="SignIn" 
            component={SignIn}/>
        </Stack.Navigator>
    )

    
}