import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`

    flex:1;
    align-items:flex-start;

    padding: 0px ${RFValue(24)}px;
    background: ${({theme})=>theme.colors.backgroundSecondary};
`

export const Title = styled.Text`

    font-size: ${RFValue(16)}px;
    padding-top:${RFValue(24)}px;

    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.fonts.textPrimary};
`
export const SubTitle = styled.Text`

    font-size: ${RFValue(14)}px;

    font-family: ${({theme})=>theme.fonts.thin};
    color: ${({theme})=>theme.fonts.textPrimary};
`

export const Form = styled.View`

    width:${RFValue(300)}px;
    padding: ${RFValue(30)}px 0px;
 `
        
export const Label = styled.Text`
    font-size: ${RFValue(15)}px;
    padding-top: ${RFValue(10)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};
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
export const SnackContainer = styled.View`

    width:100%;
    align-items:center;
    margin-top:auto;
`