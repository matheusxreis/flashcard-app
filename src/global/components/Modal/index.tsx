import React from "react";

import {Modal as M} from "react-native-paper";

interface IMenuProps {
    isOpen: boolean;
    handleClose:()=>void;
    children:JSX.Element | JSX.Element[]
}

export function Modal({isOpen, handleClose, children}: IMenuProps){


    return (
        <M
        style={{
            alignItems:"center"
        }}
        visible={isOpen}
        onDismiss={()=>handleClose()}>

            {children}
           
        </M>
    )

}