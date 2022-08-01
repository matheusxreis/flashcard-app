import AsyncStorage from "@react-native-async-storage/async-storage";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../global/components/Button";
import { RootStackParamList } from "../../../../global/RootStackParamList";
import { Card } from "../../entities/Card";
import { Deck } from "../../entities/Deck";
import FlipCard from "react-native-flip-card";

import * as Component from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { cardWasSeen } from "../../../../global/store/cards/actions";


type navType = StackNavigationProp<RootStackParamList, "DeckPlay">
type routeType = RouteProp<RootStackParamList, "DeckPlay">

export function DeckPlay(){

    const { deckId } = useRoute<routeType>().params;
    const nav = useNavigation<navType>()
    const decks: Deck[] = useSelector((x:any)=>x.decks);
    const cards:Card[] = useSelector((x:any)=>x.cards)


    const [deck, setDeck] = useState<Deck>({} as Deck);
    const [deckCards, setDeckCards] = useState<Card[]>([]);
    const [formattedDate, setFormattedDate] = useState<string>("");
    const [play, setPlay] = useState<boolean>(false);
    const [flip, setFlip] = useState<boolean>(false);
    const [actualCard, setActualCard] = useState<number>(0);
    const [emptyAnswer, setEmptyAnswer] = useState<boolean>(false);

    const [okCards, setOkCards] = useState<Card[]>([]);
    const [hardCards, setHardCards] = useState<Card[]>([]);
    const [easyCards, setEasyCards] = useState<Card[]>([]);
    const [repeatCards, setRepeatCards] = useState<Card[]>([]);

    const [timePlay, setTimePlay] = useState<number>(1);
    
    const dispatch = useDispatch();

    function getCards(){
        return cards.filter(x=>x.deckId === deckId); 
    };

    function getnNotSeenCards(){
        return deckCards.filter(x=>x.seen===false).length;
    };

    function getDeck(){
        return decks.find(x=>x.id === deckId);
    };

    function getDeckInfo(){
        setDeck(getDeck());
        setDeckCards(getCards());
    };
    
    async function whatLanguage():Promise<"pt-br"|"en-us"|"es-es">{
        const l = await AsyncStorage.getItem("@flashcardapp:language")
        if(l === "pt_br"){ return "pt-br" };
        if(l === "en_us") { return "en-us" };
        if(l === "es_es") { return "es-es" };

        return "pt-br"

    };

    
    function getFormattedDate(){
             whatLanguage().then(x=>{
          
                 console.log(x)
                 setFormattedDate(
                new Date(deck.createdAt).toLocaleDateString(x)
                )
        });


    };

    function goToAddCard(){
        nav.navigate("CardAdd");
    };
    function goToHome(){
        nav.navigate("HomeScreenLogin");
    }
    function handleGoPlay(){

        if(deckCards.length){
            setPlay(true)
        }else {
            Alert.alert("Deck sem cards", "Parece que o deck não tem nenhum card.", 
            [{text: "OK", onPress:()=>{}},
              {text: "Adicionar Card", onPress:()=>{goToAddCard()}}]
            )
        }
    };

    function handleFlipCard(){
        setFlip(!flip);
    };


    function playFinished(){

         Alert.alert("Jogo Encerrado", "Os cards desse deck terminaram.",
        [{text:"OK", onPress:()=>{goToHome()}}]);

        goToHome();
    }

    function repeatGame(){


        if(timePlay === 1){
        setDeckCards(repeatCards);
        setActualCard(0); 
        setTimePlay(2);
        handleFlipCard();
        setEmptyAnswer(false);

        console.log("TIME 2")
        }
        else if(timePlay === 2) {
        setDeckCards(hardCards);
        setActualCard(0); 
        setTimePlay(3);
        handleFlipCard();
        setEmptyAnswer(false);
        console.log("TIME 3")

        }
        else if (timePlay === 3) {
       // setActualCard(0); 
        setRepeatCards([]);
        decideActualCard();
        handleFlipCard();
        console.log("TIME 3")

        
        }
    }

    
    function decideActualCard(){
        setEmptyAnswer(true);
        
        if(actualCard+1>deckCards.length-1){
         
            setEmptyAnswer(false)
            setActualCard(actualCard);
            playFinished();
            return;
        }else{
            
            handleFlipCard();
            setActualCard(actualCard+1);
        }

        setTimeout(()=>{
            setEmptyAnswer(false);
        }, 1000)

    };

    function wasSeen(){
        dispatch(cardWasSeen(deckCards[actualCard].id))
    }

    function easy(){

        const actual = deckCards[actualCard];
        setEasyCards([...easyCards, actual]);


        wasSeen();
        decideActualCard();
    };

    function hard(){

        const actual = deckCards[actualCard]
        setDeckCards([...deckCards, actual])
        wasSeen();
        decideActualCard();
    };

  

    useEffect(()=>{
        getDeckInfo();
    }, [])

    useEffect(()=>{
        getFormattedDate();
    }, [deck, cards])

    useEffect(()=>{
        console.log(repeatCards.length)
    }, [repeatCards])

    return (
        <Component.Container>
            {play && (
            <Component.CountContainer>
              <Component.LabelCard> Restam: {deckCards.length - actualCard} </Component.LabelCard>
              <Component.LabelCard> Difícil: {hardCards.length} </Component.LabelCard>
              <Component.LabelCard> Ok: {okCards.length} </Component.LabelCard>
            </Component.CountContainer>
            )}
            {play === false ? (
            <Component.DeckContainer>
             <Component.DeckName> {deck.title} </Component.DeckName>
             <Component.DeckDataContainer>
                <Component.DeckInfo> Autor: </Component.DeckInfo>
                <Component.DeckData>  {deck.authorName} </Component.DeckData>
             </Component.DeckDataContainer>
             <Component.DeckDataContainer>
                <Component.DeckInfo> Data de criação: </Component.DeckInfo>
                <Component.DeckData>  { formattedDate } </Component.DeckData>
             </Component.DeckDataContainer>
             <Component.DeckDataContainer>
                <Component.DeckInfo> Cards: </Component.DeckInfo>
                <Component.DeckData>  {deckCards.length} </Component.DeckData>
             </Component.DeckDataContainer>
             <Component.DeckDataContainer>
                <Component.DeckInfo> Novos cards: </Component.DeckInfo>
                <Component.DeckData>  {getnNotSeenCards()} </Component.DeckData>
             </Component.DeckDataContainer>
             <Component.PlayButtonContainer>
               <Button title="Play" onPress={()=>{handleGoPlay()}}/>
             </Component.PlayButtonContainer>
            </Component.DeckContainer>
            ) : (
                <Component.MyFlipCard
                clickable={false}
                fliHorizontal={true}
                flipVertical={true}
                flip={flip}>
                <Component.CardContainer>
                    
                    <Component.PlayingContainer>
                    <Component.LabelCard> Frente:</Component.LabelCard>
                    <Component.QuestionAnswer>{deckCards[actualCard]?.question}</Component.QuestionAnswer>
                    </Component.PlayingContainer>
                    <Component.FlipIconContainer>
                        <MaterialCommunityIcons
                        onPress={()=>handleFlipCard()}
                        name="orbit-variant"
                        size={75}
                        color={useTheme().colors.primary}
                        />
                    </Component.FlipIconContainer>
                </Component.CardContainer>
                <Component.CardContainer>
                    <Component.PlayingContainer>
                    <Component.LabelCard> Costas:</Component.LabelCard>
                    <Component.QuestionAnswer>{emptyAnswer ? "" : deckCards[actualCard]?.answer}</Component.QuestionAnswer>
                    </Component.PlayingContainer>
                    <Component.DifficultLevelButtonContainer>
                        <Component.LevelButton
                        difficult="easy"
                        title="Fácil"
                        onPress={()=>{easy()}}
                        />
                       
                        <Component.LevelButton
                        difficult="hard"
                        title="Difícil"
                        onPress={()=>{hard()}}
                        />
                    </Component.DifficultLevelButtonContainer>
                </Component.CardContainer>
               </Component.MyFlipCard>
            )}

        </Component.Container>
    )
}