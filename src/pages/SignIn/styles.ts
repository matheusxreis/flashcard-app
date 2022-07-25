import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"


export const Container = styled.View`

        flex:1;
        width:100%;
        justify-content:center;
        padding: 0px ${RFValue(24)}px;
        max-width:100%;

`
export const HalfContainer = styled.View`

        height: ${RFValue(450)}px;
        background-color: ${({theme})=>theme.colors.backgroundSecondary};
        width: ${RFPercentage(51)}px;
        position:absolute;
        bottom: 0;
        right:0;
        border-radius: ${RFValue(20)}px;
`


export const ButtonContainer = styled.View`

        display:flex;
        flex-direction:row;
        justify-content: space-between;
        margin-top: ${RFValue(20)}px;

`

export const Title = styled.Text`
        font-size: ${RFValue(20)}px;
        font-family: ${({theme})=>theme.fonts.medium};
        color: ${({theme})=>theme.colors.primaryText};
`

export const TitleFlashcard = styled.Text`
        font-size: ${RFValue(30)}px;
        text-align:center;
       // color:#397AF9;
        font-weight:300;
`

export const Label = styled.Text`


        font-size: ${RFValue(15)}px;
        padding-top: ${RFValue(10)}px;
        font-family: ${({theme})=>theme.fonts.light};
        color: ${({theme})=>theme.colors.primaryText};

`

export const Form = styled.View`
padding-top:${RFValue(123)}px;
flex:1;
justify-content:center;
`

export const Star = styled(MaterialCommunityIcons).attrs({
        name:"star",
        color:"#397AF9"
})``


export const StarContainer = styled.View`
        display:flex;
        flex-direction:row;
        width:100%;
        align-items:center;
        justify-content:center;
        margin-bottom: ${RFValue(60)}px;
`

