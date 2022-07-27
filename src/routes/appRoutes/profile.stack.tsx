import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { Preferences } from "../../pages/Preferences";
import { SignIn } from "../../pages/SignIn";
import { OfflineSignInInfo, UserProfile } from "../../pages/OfflineSignInInfo";
import { useTranslationService } from "../../services/translation/useTranslationService";


const Stack = createStackNavigator()

export function ProfileStackRoutes(){

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
                title: "Home"
            }}
            name="HomeScreenLogin" 
            component={OfflineSignInInfo}/>
        </Stack.Navigator>
    )

    
}