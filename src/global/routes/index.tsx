import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BottomAppRoutes } from "./appRoutes/app.bottom";
import { BottomAuthRoutes } from "./authRoutes/auth.bottom";



export function Routes(){

    const user = useSelector((x:any)=>x.user);


    useEffect(()=>{console.log(user)},[user])
    return (
        <NavigationContainer>
           {user?.id ? (<BottomAppRoutes />) : (<BottomAuthRoutes/>)} 
        </NavigationContainer>
    )

}