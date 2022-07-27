import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`

    flex:1;
    align-items:center;
    justify-content:center;
    padding: 0px ${RFValue(24)}px;
    background: ${({theme})=>theme.colors.backgroundSecondary};

`


export const Name = styled.Text`

    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.bold};
    color: ${({theme})=>theme.colors.textPrimary};
`

export const Title = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};
`


export const TitleContainer = styled.View`

    width:100%;
    align-items:flex-start;
    padding:${RFValue(24)}px 0px;


`

export const Details = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};
    padding:${RFValue(24)}px 0px;

`

export const ButtonContainer = styled.View`

    display:flex;
    flex-direction:row;
    width:100%;

    justify-content:space-around;
`