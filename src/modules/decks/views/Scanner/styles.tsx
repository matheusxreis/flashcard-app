import styled from "styled-components/native";
import {Camera} from "expo-camera";
import { RFValue } from "react-native-responsive-fontsize";



export const Container = styled.View`
    
    flex:1;
    align-items:flex-start;

   
    background: ${({theme})=>theme.colors.backgroundSecondary};

`

export const Cam = styled(Camera)`
    
    width:100%;
    height:100%;
    padding: 0px ${RFValue(24)}px;

`


export const SnackContainer = styled.View`

    width:50%;
    align-items:center;
    margin-top:auto;
    border:2px solid red;
    position:absolute;
    top:0;

`