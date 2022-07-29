import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { Divider } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { v4 } from "uuid";
import { Button } from "../../../../global/components/Button";
import { Modal } from "../../../../global/components/Modal";
import { RadioCard } from "../../../../global/components/RadioCard";
import { Select } from "../../../../global/components/Select";
import { TextInput } from "../../../../global/components/TextInput";
import { useTranslationService } from "../../../../global/services/translation/useTranslationService";
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
    const { translation } = useTranslationService();


    function selectValue(){
        if(selectedDeck.title){
            return getTitle(selectedDeck.title)
        }
        return translation("cardAdd.defaultValueSelect")
    }

    function handleAddCard(){

        const newCard = new Card(frontCard, backCard, selectedDeck.id, v4());
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
        
        <Component.Title>{translation("cardAdd.title")}</Component.Title>

        <Component.Form>
            <Component.Label> {translation("cardAdd.selectLabel")} </Component.Label>
            <Select
            onPress={()=>{setModalDecks(true)}}
            value={selectValue()}
            />  

            <Component.Label>{translation("cardAdd.frontCardInputLabel")}</Component.Label>
            <TextInput 
            value={frontCard}
            onChangeText={setFrontCard}
            placeholder={translation("cardAdd.frontCardInputPlaceholder")}
            />
            <Component.Label>{translation("cardAdd.backCardInputLabel")}</Component.Label>
             <TextInput 
            value={backCard}
            onChangeText={setBackCard}
            placeholder={translation("cardAdd.backCardInputPlaceholder")}
            />


        </Component.Form>
        <Component.ButtonContainer>
            <Button
            disable={isButtonDisable}
            onPress={()=>handleAddCard()}
            title={translation("cardAdd.addButton")}/>
        </Component.ButtonContainer>

        <Modal
        handleClose={()=>{setModalDecks(false)}}
        isOpen={modalDecks}>
            <Component.ModalContentContainer>
            <Component.ModalTitle> {translation("cardAdd.selectLabel")} </Component.ModalTitle>
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