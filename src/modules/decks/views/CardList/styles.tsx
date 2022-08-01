import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { ReactReduxContext } from "react-redux";
import styled from "styled-components/native";



export const Container = styled.View`

    display:flex;
    flex:1;
    width:100%;
    background: ${({theme})=>theme.colors.backgroundSecondary};
    padding: ${RFValue(10)}px;

`


export const TableHeader = styled.View`
    
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content:space-between;
    margin-top: ${RFValue(5)}px;


`

export const TableHeaderItem = styled.View`
    

    border: 1px solid ${({theme})=>theme.colors.backgroundSecondary};
    align-items: center;
    justify-content:center;
    width:50%;
    background:  ${({theme})=>theme.colors.backgroundPrimary};
    border-radius: 5px;


`


export const TableHeaderText = styled.Text`
    

   font-family: ${({theme})=>theme.fonts.medium};
   color: ${({theme})=>theme.colors.textPrimary};
   font-size: ${RFValue(16)}px;


`

export const TableContent = styled.TouchableOpacity`
    
    display:flex;
    flex-direction:row;
    width: 100%;
    justify-content:space-between;
    margin-top: ${RFValue(5)}px;
  

`

export const TableContentItem = styled.View`
    

    border: 1px solid ${({theme})=>theme.colors.backgroundSecondary};
    align-items: center;
    justify-content:center;
    width:50%;
    background:  ${({theme})=>theme.colors.backgroundPrimary};



`

export const TableTextContainer = styled.View`
    align-items:center;
    justify-content:center;
    
`


export const TableContentText = styled.Text`
      padding: ${RFValue(3)}px;

   font-family: ${({theme})=>theme.fonts.light};
   color: ${({theme})=>theme.colors.textPrimary};
   font-size: ${RFValue(14)}px;


`

export const TableDeckTitle = styled.Text`
    

   font-family: ${({theme})=>theme.fonts.light};
   color: ${({theme})=>theme.colors.textPrimary};
   font-size: ${RFValue(10)}px;


`


export const ContainerDotsTable = styled.View`
    
    flex-direction:row;
    width:100%;


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
export const CardId = styled.Text`

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
    
    export const MenuContainer = styled.View`

    width: ${RFValue(250)}px;
    height: ${RFValue(180)}px;
    background: ${({theme})=>theme.colors.backgroundSecondary};
    border-radius: ${RFValue(5)}px;
    padding: ${RFValue(10)}px;

`


export const MenuTitle = styled.Text`

    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.textPrimary};

`

    
