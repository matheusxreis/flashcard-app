import { themeTypes } from "./types";

export function changeTheme(theme:number){
    return {
        type: themeTypes.changeTheme,
        payload: { theme }
    }
}