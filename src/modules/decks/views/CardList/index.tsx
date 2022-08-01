import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { Modal } from "../../../../global/components/Modal";
import { getTitle } from "../../../../global/utils/getTitle";
import { Card } from "../../entities/Card";
import { Deck } from "../../entities/Deck";

import * as Component from "./styles";



export function CardList(){

    const cards:Card[] = useSelector((x:any)=>x.cards);
    const decks:Deck[] = useSelector((x:any)=>x.decks);
    const theme = useTheme();

    const [modalCard, setModalCard] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<Card>({} as Card);

    function getDeck(deckId:string) {
        return decks.find(x=>x.id === deckId).title
    };

    function selectCard(card:Card){
        setSelectedCard(card);
        setModalCard(true);
    };

    return (

        <Component.Container>

            <Component.TableContentText>
               Clique no card para alterar:
            </Component.TableContentText>
            <Component.TableHeader>
                <Component.TableHeaderItem>
                    <Component.TableHeaderText>
                        Frente: 
                    </Component.TableHeaderText>
                </Component.TableHeaderItem>
                <Component.TableHeaderItem>
                    <Component.TableHeaderText>
                        Costas: 
                    </Component.TableHeaderText>
                </Component.TableHeaderItem>
            </Component.TableHeader>

            {cards.length && 
            <FlatList 
            data={cards}
            renderItem={({item})=>(
                <Component.ContainerDotsTable>
                    <Component.TableContent onPress={()=>selectCard(item)}>        
                        <Component.TableContentItem>
                        <Component.TableTextContainer>
                            <Component.TableContentText>
                                {item.question}
                            </Component.TableContentText>
                            <Component.TableDeckTitle>
                                Deck: {getDeck(item.deckId)}
                            </Component.TableDeckTitle>
                        </Component.TableTextContainer>
                        </Component.TableContentItem>
                        <Component.TableContentItem>
                            <Component.TableContentText>
                                {item.answer}
                            </Component.TableContentText>
                            
                        </Component.TableContentItem>
                    </Component.TableContent>
                
                </Component.ContainerDotsTable>
            )} />
            }

            {/* OPÇÕES MODAL */}
            
            <Modal
            isOpen={modalCard}
            handleClose={()=>setModalCard(false)}>
        <Component.MenuContainer>
                <Component.MenuTitle> {getTitle(selectedCard.question)+"  :   " + getTitle(selectedCard.answer)} </Component.MenuTitle>
                <Component.CardId> id: {selectedCard.id} </Component.CardId>

                <Component.MenuItem onPress={()=>{}}>
                        <Component.MenuIcon size={24} name="pen" />
                        <Component.MenuItemText> {"Editar Card"} </Component.MenuItemText>
                </Component.MenuItem>
                
                <Component.MenuItem onPress={()=>{}}>
                        <Component.MenuIcon size={24} name="delete" />
                        <Component.MenuItemText> {"Remover Card"} </Component.MenuItemText>
                </Component.MenuItem>

            </Component.MenuContainer>
            </Modal>
        </Component.Container>
    )


}