import React, { useState } from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import { Button } from "../../../../global/components/Button";
import { Snackbar } from "../../../../global/components/Snackbar";
import { TextInput } from "../../../../global/components/TextInput";
import { Deck } from "../../entities/Deck";
import * as Component from "./styles";

export function DeckAdd(){

    const user = useSelector((x:any)=>x.user);
    const [deckName, setDeckName] = useState<string>("");
    const [snackVisible, setSnackVisible] = useState<boolean>(false);

    function addDeck(){

        const newDeck = new Deck(
            deckName, 
            user.id, 
            user.name, 
            new Date().getTime());

        console.log(newDeck);
        setSnackVisible(true);

        setDeckName("");


    }

    return (
        <Component.Container>
            <Component.Title> Adicione seu deck. </Component.Title>
            <Component.SubTitle> Os decks adicionados aqui, irão automaticamente para a página principal. </Component.SubTitle>
        
            <Component.Form>
                <Component.Label> Escolha um nome para o deck: </Component.Label>
                <TextInput
                placeholder="Nome do deck"
                onChangeText={setDeckName}
                value={deckName}
                />
            </Component.Form>
            <Component.ButtonContainer>
                <Button
                disable={deckName.length<=0}
                onPress={()=>addDeck()}
                icon="playlist-plus"
                title="Adicionar"
                />
            </Component.ButtonContainer>

            <Component.SnackContainer>
                <Snackbar
                onDismiss={()=>setSnackVisible(false)}
                visible={snackVisible}
                text={`Deck adicionado!`}
                />
            </Component.SnackContainer>
        </Component.Container>
    )
}