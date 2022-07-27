import "styled-components"
import { swamp, theme } from "./theme"


declare module "styled-components" {

    type ThemeType = typeof swamp;


    export interface DefaultTheme extends ThemeType {};
}