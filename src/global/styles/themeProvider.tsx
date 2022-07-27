import React, { useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import { useSelector } from "react-redux"

import { swamp, theme } from "./theme"
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

interface IMyThemeProviderProps {
    children: JSX.Element | JSX.Element[]
};

export function MyThemeProvider({children}: IMyThemeProviderProps){

    const actualTheme = useSelector((x:any)=> x.theme);
    const [myTheme, setMyTheme] = useState<typeof swamp>(
        theme.find(x=>x.id === actualTheme)
    )

    function getTheme() {

        const a = theme.find(x=>x.id === actualTheme);
        console.log(a);
        setMyTheme(a)
    }

    useEffect(()=>{
            getTheme();
    }, [actualTheme])


    
    return (
        <ThemeProvider theme={myTheme}>
            <ExpoStatusBar 
                style={actualTheme===2 ? "light" : "dark"}/>
            {children}
        </ThemeProvider>
    )

}