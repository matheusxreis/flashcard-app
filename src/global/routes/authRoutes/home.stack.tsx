import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { Home } from "../../../modules/auth/views/Home";
import { SignIn } from "../../../modules/auth/views/SignIn";
import { SignUp } from "../../../modules/auth/views/SignUp";
import { useTranslationService } from "../../services/translation/useTranslationService";


const Stack = createStackNavigator()

export function HomeStackRoutes(){

    const theme = useTheme();
    const { translation } = useTranslationService();

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
            name="HomeScreen" 
            component={Home}/>
            
            <Stack.Screen 
            options={{
               
                title: translation("screens.signIn")
            }}
            name="SignIn" 
            component={SignIn}/>

            <Stack.Screen
            options={{
                title: translation("screens.signUp")
            }}
            name="SignUp"
            component={SignUp}
            />      
        </Stack.Navigator>
    )

    
}