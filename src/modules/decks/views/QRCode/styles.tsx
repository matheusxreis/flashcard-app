import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";




export const Container = styled.View`
    
    background: #fff;
    width:${RFValue(300)}px;
    height: ${RFValue(300)}px;
    border-radius: ${RFValue(6)}px;
    padding: ${RFValue(25)}px;
    display:flex;
    align-items:center;
    justify-content:center;

`