import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Container = styled.ScrollView.attrs({
    contentContainerStyle:{
        flex:1,
        alignItems:"center",
    },
})`
    
    background-color: ${({theme})=>theme.colors.backgroundPrimary};

    `


export const SearchContainer = styled.View`


    padding: ${RFValue(24)}px ${RFValue(10)}px
    width:100%;
    

`

export const FABContainer = styled.View`

`