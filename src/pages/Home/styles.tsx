import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { useDimesion } from "../../utils/dimensions";


interface IScrollView {

    landscape: boolean;

};

export const Container = styled.ScrollView.attrs({
    contentContainerStyle:{
        flex:1,
        alignItems:"center",
    },
})`
//padding: 0px ${RFValue(10)}px
  
    
`
export const HalfContainer = styled.ScrollView.attrs<IScrollView>({
    contentContainerStyle: {
        alignItems:"center"
    }
})`

        background-color: ${({theme})=>theme.colors.backgroundSecondary};
        width: ${RFPercentage(51)}px;
        height: ${({landscape})=>landscape ? RFValue(290) : RFValue(460)}px;
       
        padding: ${RFValue(10)}px ${RFValue(10)}px;
    border:2px solid ${({theme})=>theme.colors.backgroundPrimary};
        position:absolute;
        bottom: 0;
        right:0;
      
`


export const Greetings = styled.Text`
    
    font-size: ${RFValue(40)}px;
    color: ${({theme})=>theme.colors.textSecondary};
    font-family:${({theme})=>theme.fonts.title};
    margin-top: ${RFValue(20)}px;
    text-align:center;

`

export const Description = styled.Text`
    
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.textPrimary};
    font-family:${({theme})=>theme.fonts.thin};

`


export const WhatAre = styled.Text`
    margin-top: ${RFValue(20)}px;
    font-size: ${RFValue(14)}px;
    color: ${({theme})=>theme.colors.textSecondary};
    font-family:${({theme})=>theme.fonts.light};
    text-decoration: underline;

`

export const WhatAreContainer = styled.TouchableOpacity`
  

`

export const ButtonContainer = styled.View`
    
    display:flex;
    justify-content:space-around;
    height: ${RFValue(100)}px;


`

export const WoudLikeUpgrade = styled.Text`
    
    font-size: ${RFValue(14)}px;
    padding: ${RFValue(10)}px ${RFValue(24)}px ;

    color: ${({theme})=>theme.colors.textPrimary};
    font-family:${({theme})=>theme.fonts.light};
    text-align:center;

`

export const WrapperHalf = styled.View`
    

    justify-content:space-between;
    height: ${RFValue(180)}px;
`
