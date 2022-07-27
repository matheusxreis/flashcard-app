import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`

    position:relative;
    width:100%;
    border:2px solid ${({theme})=>theme.colors.primary};
    height: ${RFValue(50)}px;
    border-radius: ${RFValue(7)}px;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;

`

export const DownIcon = styled(MaterialCommunityIcons)`

    color: ${({theme})=>theme.colors.textPrimary};
    

`

export const Value = styled.Text`

    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=> theme.colors.textPrimary};

`