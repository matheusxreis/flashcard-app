import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity.attrs({
    activeOpacity:0.6
})`

    background: ${({theme})=>theme.colors.backgroundSecondary};
    width:100%;
    border-radius:${RFValue(6)}px;
    padding: ${RFValue(6)}px;
    margin: ${RFValue(3)}px 0px;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;


`

export const Title = styled.Text` 

    font-size: ${RFValue(16)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.textPrimary};

`


export const CardAmount = styled.Text` 

    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};

`

export const TextContainer = styled.View``

export const DotsContainer = styled.TouchableOpacity`
    width: ${RFValue(50)}px;
    align-items:flex-end;
    
`
export const BadgeContainer = styled.View`

    align-items: flex-start;
    justify-content:flex-start;
`

export const MenuContainer = styled.View`
    position:absolute;
    top:0;
    right:0;
    height: ${RFValue(160)}px;
    width: ${RFValue(100)}px;
    border-top:2px solid red;
    z-index:2px;
`

export const TitleContainer = styled.View`
    display:flex;
    flex-direction:row;
    align-items:center;
`