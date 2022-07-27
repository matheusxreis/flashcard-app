import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "styled-components";
import { Preferences } from "../../pages/Preferences";
import { SignIn } from "../../pages/SignIn";
import { OfflineSignInInfo, UserProfile } from "../../pages/OfflineSignInInfo";
import { useTranslationService } from "../../services/translation/useTranslationService";
import { useSelector } from "react-redux";
import { DeckHome } from "../../pages/DeckHome";


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
        </Stack.Navigator>
    )

    
}