import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Container = styled.View`
    
    flex:1;
    align-items:center;
    background: ${({theme})=>theme.colors.backgroundSecondary};

`


export const PreferencesList = styled.FlatList`
    
`

export const TitleListContainer = styled.View`
    background: ${({theme})=>theme.colors.backgroundPrimary};
    width: 100%;
    padding: ${RFValue(5)}px 0px

`

export const TitleList = styled.Text`

    color: ${({theme})=>theme.colors.textTertiary};
    font-size: ${RFValue(10)}px;
    font-family: ${({theme})=>theme.fonts.bold};
    text-transform:uppercase;
    
`