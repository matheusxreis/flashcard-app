import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../global/components/Button";
import { Modal } from "../../../../global/components/Modal";
import { RadioCard } from "../../../../global/components/RadioCard";
import { Select } from "../../../../global/components/Select";
import { TextInput } from "../../../../global/components/TextInput";
import { addCard } from "../../../../global/store/cards/actions";
import { getTitle } from "../../../../global/utils/getTitle";
import { Card } from "../../entities/Card";
import { Deck } from "../../entities/Deck";
import * as Component from "./styles";


export function CardAdd(){

    

    const [modalDecks, setModalDecks] = useState<boolean>(false);
    const [selectedDeck, setSelectedDeck] = useState<Deck>({} as Deck);
    const [frontCard, setFrontCard] = useState<string>("");
    const [backCard, setBackCard] = useState<string>("");

    const [isButtonDisable, setIsButtonDisable] = useState<boolean>(true);

    const decks = useSelector((x:any)=>x.decks);
    const dispatch = useDispatch();


    function selectValue(){
        if(selectedDeck.title){
            return getTitle(selectedDeck.title)
        }
        return "Nenhum deck selecionado."
    }

    function handleAddCard(){

        const newCard = new Card(frontCard, backCard, selectedDeck.id);
        dispatch(addCard(newCard));

        setFrontCard("");
        setBackCard("");
        setSelectedDeck({} as Deck);
    }

    useEffect(()=>{

        if(backCard && frontCard && selectedDeck.id){
            setIsButtonDisable(false)
        }else {
            setIsButtonDisable(true)
        }

    },[backCard, frontCard, selectedDeck]);

    return (
        <Component.Container>
        
        <Component.Title>Adicione um card ao seu deck.</Component.Title>

        <Component.Form>
            <Component.Label> Selecione o deck: </Component.Label>
            <Select
            onPress={()=>{setModalDecks(true)}}
            value={selectValue()}
            />  

            <Component.Label> Frente do card: </Component.Label>
            <TextInput 
            value={frontCard}
            onChangeText={setFrontCard}
            placeholder="Adicione a frente do card"
            />
            <Component.Label> Verso do card: </Component.Label>
             <TextInput 
            value={backCard}
            onChangeText={setBackCard}
            placeholder="Adicione o verso do card"
            />


        </Component.Form>
        <Component.ButtonContainer>
            <Button
            disable={isButtonDisable}
            onPress={()=>handleAddCard()}
            title="Adicionar"/>
        </Component.ButtonContainer>

        <Modal
        handleClose={()=>{setModalDecks(false)}}
        isOpen={modalDecks}>
            <Component.ModalContentContainer>
            <Component.ModalTitle> Selecione o deck: </Component.ModalTitle>
            <Component.PreferencesList
                ItemSeparatorComponent={()=><Divider />}
                data={decks}
                renderItem={({item})=>
                <RadioCard 
                onPress={()=>{setSelectedDeck(item)}}
                title={item.title}
                isChecked={selectedDeck.id === item.id} />}
                />
            </Component.ModalContentContainer>

        </Modal>
        </Component.Container>
    )
}