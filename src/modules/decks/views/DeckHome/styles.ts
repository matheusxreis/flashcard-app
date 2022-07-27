import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Container = styled.View`
    
    flex:1;
 
    background-color: ${({theme})=>theme.colors.backgroundPrimary};



    `


export const SearchContainer = styled.View`


    padding: ${RFValue(24)}px ${RFValue(10)}px
    width:100%;
    

`

export const FABContainer = styled.View`

`

export const DeckList = styled.FlatList`
    height:auto;
    width:100%;
    padding: 0px ${RFValue(10)}px

`
