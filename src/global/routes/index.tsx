import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BottomAppRoutes } from "./appRoutes/app.bottom";
import DrawerAppRoutes from "./appRoutes/app.drawer";
import { BottomAuthRoutes } from "./authRoutes/auth.bottom";



export function Routes(){

    const user = useSelector((x:any)=>x.user);


    useEffect(()=>{console.log(user)},[user])
    return (
       <>
                  {user?.id ? ([
                    <NavigationContainer>
                         <BottomAppRoutes />
                    </NavigationContainer>,
                    ]) : 
                    (<NavigationContainer>
                        <BottomAuthRoutes/>
                    </NavigationContainer>
                   )} 
        </>
    )

}