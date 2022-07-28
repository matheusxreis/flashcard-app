import { MaterialCommunityIcons } from "@expo/vector-icons";
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


export const MenuContainer = styled.View`

    width: ${RFValue(250)}px;
    height: ${RFValue(220)}px;
    background: ${({theme})=>theme.colors.backgroundSecondary};
    border-radius: ${RFValue(5)}px;
    padding: ${RFValue(10)}px;

`


export const MenuTitle = styled.Text`

    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.textPrimary};

`
export const DeckId = styled.Text`

    font-size: ${RFValue(10)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};

`

export const MenuItem = styled.TouchableOpacity`
    flex-direction:row;
    justify-content:flex-start;
    padding: ${RFValue(15)}px 0px;
    borderBottomWidth:0.5px;
    borderBottomColor: ${({theme})=>theme.colors.textPrimary};

    

`

export const MenuIcon = styled(MaterialCommunityIcons)`
    color: ${({theme})=>theme.colors.textPrimary};
`

export const MenuItemText = styled.Text`
    font-size: ${RFValue(12)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.textPrimary};
    padding-left: ${RFValue(7)}px;
`