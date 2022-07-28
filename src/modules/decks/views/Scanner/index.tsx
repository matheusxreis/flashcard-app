import React, { useCallback, useEffect, useState } from "react";
import * as Component from "./styles";
import { Text } from "react-native";
import {Camera} from "expo-camera";
import { Deck } from "../../entities/Deck";
import { Card } from "../../entities/Card";
import { Snackbar } from "../../../../global/components/Snackbar";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { SnackContainer } from "../DeckAdd/styles";
import Mask from "react-native-barcode-mask";
import { useTheme } from "styled-components";
import { ActivityIndicator } from "react-native-paper";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../../global/RootStackParamList";
import { useDispatch } from "react-redux";
import { addDeck } from "../../../../global/store/decks/actions";
import { addCards } from "../../../../global/store/cards/actions";

interface ScanQRData {
  
        deck: Deck,
        cards: Card[]
    
};

type navType = StackNavigationProp<RootStackParamList, "Scanner">


export function Scanner(){

    const theme = useTheme();
    const nav = useNavigation<navType>();
    const dispatch = useDispatch();

    const [hasPermission, setHasPermission] = useState(null);
    const [camKey, setCamKey] = useState<number>(0);
    const [sharedSuccess, setSharedSuccess] = useState<boolean>(false);
    const [sharedError, setSharedError] = useState<boolean>(false);
 

     function handleScan(data:string){
      //  console.log("data", data);
      if(data){
        const sharedDeck:ScanQRData = JSON.parse(data);

        sharedDeck.deck.id ?  success(sharedDeck)  : error()
        setCamKey(camKey+1);

      }
    }

    function success(data: ScanQRData){

        setSharedSuccess(true);
        console.log(data.deck, "olha o deck")
        dispatch(addDeck(data.deck));
        dispatch(addCards(data.cards));

        setTimeout(()=>nav.navigate("HomeScreenLogin"), 1500);
    }
    function error(){
        setSharedError(true);
    }
    async function getPermission(){
      const { status } = await Camera?.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    }


    useEffect(() => {
        getPermission()

      }, []);

      useFocusEffect(useCallback(()=>{setCamKey(camKey+1)},[]))
     
  

      if (hasPermission === null) {
        return <Text> Permission to camera denied. </Text>;
      }
    return (
        <Component.Container
        >
            <Component.Cam 
            key={camKey}
            
            onMountError={(e)=>console.log(e)}
            onBarCodeScanned={ (qr)=> {if(sharedSuccess==false){handleScan(qr?.data)}}}
            >
             

                    <Mask    
                    edgeRadius={9}
                    edgeColor={theme.colors.primary}
                    edgeBorderWidth={7}
                    outerMaskOpacity={0}
                    showAnimatedLine={false}/>
                
     
            <SnackContainer>
                <Snackbar 
                onDismiss={()=>{setSharedSuccess(false); setCamKey(camKey+1)}}
                visible={sharedSuccess}
                text={"O deck foi compartilhado com sucesso!"}
                />
                 <Snackbar 
                onDismiss={()=>{setSharedError(false); setCamKey(camKey+1)}}
                visible={sharedError}
                text={"Alguma coisa deu errado!"}
                />
            </SnackContainer>
            </Component.Cam>

        </Component.Container>
    )
}