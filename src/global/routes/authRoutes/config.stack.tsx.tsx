import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { Preferences } from "../../../modules/preferences/views/Preferences";
import { SignIn } from "../../../modules/auth/views/SignIn";
import { useTranslationService } from "../../services/translation/useTranslationService";


const Stack = createStackNavigator()

export function ConfigStackRoutes(){

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
                title: translation("screens.settings")
            }}
            name="Config" 
            component={Preferences}/>
        </Stack.Navigator>
    )

    
}