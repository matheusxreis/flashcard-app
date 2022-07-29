import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import FlipCard from "react-native-flip-card";
import { Button } from "../../../../global/components/Button";
import { DifficultButton } from "../../../../global/components/DifficultButton";


interface DifficultLevel {
    level: "easy" | "ok" | "hard"
}

export const Container = styled.View`
    flex:1;
    align-items:center;
    justify-content:center;
    background: ${({theme})=>theme.colors.backgroundPrimary};
    justify-content:center;
`


export const DeckContainer = styled.View`
    border-radius: ${RFValue(5)}px;
    width: 90%;
    height: ${RFValue(300)}px;
    background: ${({theme})=>theme.colors.backgroundSecondary};
    padding: ${RFValue(10)}px;
    

`

export const DeckName = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.textPrimary};

`
export const DeckInfo = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.textPrimary};
`

export const DeckData = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};
`

export const DeckDataContainer = styled.View`
    
    width: 100%;
    display:flex;
    flex-direction:row;
    align-items:center;
    
`

export const PlayButtonContainer = styled.View`

    padding: ${RFValue(10)}px;
    width:100%;
    
    margin-top:auto;


`

export const LabelCard = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({theme})=>theme.fonts.light};
    color: ${({theme})=>theme.colors.textPrimary};
`
export const PlayingContainer = styled.View`

    width: 100%;
    justify-content:center;
    align-items:center;
`

export const QuestionAnswer = styled.Text`

    font-size: ${RFValue(25)}px;
    padding: ${RFValue(10)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.textPrimary};


`

export const MyFlipCard = styled(FlipCard).attrs({
    style: {
        innerWidth:900,
        height:100
    }
})`
    display:flex;
    border-radius: ${RFValue(5)}px;
    height: ${RFValue(300)}px;
    align-items: center;
    margin-top: ${RFValue(120)}px;
    justify-content:center;
    padding: ${RFValue(10)}px;

`

export const CardContainer = styled.View`

    border-radius: ${RFValue(5)}px;
    width: ${RFValue(300)}px;
    height: ${RFValue(300)}px;
    background: ${({theme})=>theme.colors.backgroundSecondary};
    padding: ${RFValue(50)}px;
    align-items:center;
`

export const FlipIconContainer = styled.View` 

    width: 100%;
    align-items:center;
    margin-top:auto;
`

export const DifficultLevelButtonContainer = styled.View`

    display:flex;
    flex-direction:row;
    margin-top:auto;
    width: ${RFValue(315)}px;
    padding: ${RFValue(15)}px;
    justify-content:space-between;

`

export const LevelButton = styled(DifficultButton)`
   
    
`