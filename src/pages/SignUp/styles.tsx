import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.ScrollView.attrs({
    contentContainerStyle:{
        flex:1,
        alignItems:"flex-start",
    },
})`
background-color: ${({theme})=>theme.colors.backgroundPrimary};



`

export const HalfContainer = styled.ScrollView.attrs({
    contentContainerStyle: {
            alignItems:"flex-start"
    }
})`

    height: ${RFValue(430)}px;
    background-color: ${({theme})=>theme.colors.backgroundSecondary};
    width: 100%;
    position:absolute;
    bottom:0;
    padding: 0px ${RFValue(20)}px;
   

   

`

export const Title = styled.Text`
    
    font-size: ${RFValue(24)}px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.textPrimary};

`

export const Description = styled.Text`

    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};

`

export const ProgressContainer = styled.View`

    width: 100%;
    display:flex;
    align-items:center;
    padding: ${RFValue(20)}px 0px;


`

export const Form = styled.View`

        width:100%;
        padding: ${RFValue(30)}px 0px;
        `
export const ButtonContainer = styled.View`
     width:${RFValue(220)}px;
     display:flex;
     margin-left:auto;
     flex-direction:row;
    align-items:flex-end;
    justify-content:flex-end;
    padding: ${RFValue(20)}px 0px;
`

export const Label = styled.Text`


        font-size: ${RFValue(15)}px;
        padding-top: ${RFValue(10)}px;
        font-family: ${({theme})=>theme.fonts.light};
        color: ${({theme})=>theme.colors.textPrimary};
`