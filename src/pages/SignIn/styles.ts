import { MaterialCommunityIcons } from "@expo/vector-icons"
import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"

interface IScrollView {
        landscape: boolean;
}


export const Container = styled.ScrollView.attrs({
        contentContainerStyle:{
            flex:1,
            alignItems:"flex-start",
        },
    })`
    //padding: 0px ${RFValue(10)}px
      
    background-color: ${({theme})=>theme.colors.backgroundPrimary};
 
    `
export const HalfContainer = styled.ScrollView.attrs({
        contentContainerStyle: {
                alignItems:"center"
        }
})
        <IScrollView>`

        height: ${({landscape})=> landscape ? RFValue(230) :RFValue(350)}px;
        background-color: ${({theme})=>theme.colors.backgroundSecondary};
        width: 100%;
        position:absolute;
        bottom:0;
       

       

`


export const ButtonContainer = styled.View`

        display:flex;
        flex-direction:row;
        justify-content: space-around;
        margin-top: ${RFValue(20)}px;
        align-items:flex-end;
        width: ${RFValue(300)}px;

`

export const Title = styled.Text`
        font-size: ${RFValue(20)}px;
        font-family: ${({theme})=>theme.fonts.medium};
        color: ${({theme})=>theme.colors.textPrimary};
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
        color: ${({theme})=>theme.colors.textPrimary};

`

export const Form = styled.View`

        width:${RFValue(300)}px;
        padding: ${RFValue(10)}px;
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

