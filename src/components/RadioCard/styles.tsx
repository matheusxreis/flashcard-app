import { RFPercentage, RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"


export const Container = styled.View`
    
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width: ${RFPercentage(50)}px;



`

export const Title = styled.Text`
    
    font-size: ${RFValue(12)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.primaryText};


`