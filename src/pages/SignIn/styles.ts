import { RFValue } from "react-native-responsive-fontsize"
import styled from "styled-components/native"


export const Container = styled.View`

        flex:1;
        width:100%;
        padding: 0px ${RFValue(24)}px;

`

export const ButtonContainer = styled.View`

        display:flex;
        flex-direction:row;
        justify-content: space-between;
        margin-top: ${RFValue(20)}px;

`

export const Title = styled.Text`
        font-size: ${RFValue(20)}px;
`