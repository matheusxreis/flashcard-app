import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";



export const Container = styled.View`
    
    position:relative;

`

export const EyeIcon = styled(Feather).attrs({
    size:24,
    color: "#212930"
})`
 
`

export const IconContainer = styled.TouchableOpacity`
    position:absolute;
    right:0;
    bottom:${RFPercentage(3)}px;
    padding-right:${RFValue(6)}px;

`