import { NavigationContainer } from "@react-navigation/native";
import { BottomAuthRoutes } from "./authRoutes/auth.bottom";



export function Routes(){

    return (
        <NavigationContainer>
            <BottomAuthRoutes />
        </NavigationContainer>
    )

}