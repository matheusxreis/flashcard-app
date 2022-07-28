import React from "react";

import * as File from "expo-file-system";
import * as Media from "expo-media-library";
import * as DocumentPicker from 'expo-document-picker';
import { stringify } from "uuid";
import { Card } from "../../../modules/decks/entities/Card";
import { Deck } from "../../../modules/decks/entities/Deck";


interface IShareFile {
    deckname: string,
    userId:string,
    content: string;
};

interface DocPicked {
    mimeType: string,
    name: string,
    size: number,
    type: string,
    uri: string,
}


interface GetFileReturn {
    deck:Deck;
    cards:Card[]
}
export function useFileService(){



   

    async function makeFile(filename:string, content:string){

       
     const requestFile = await File.StorageAccessFramework.requestDirectoryPermissionsAsync();
        
     if(requestFile.granted){

        //get uri do directory
         const uri = requestFile.directoryUri;
        //create a file txt
         await File.StorageAccessFramework.createFileAsync(uri, filename, "text/txt")
         .then( async (fileUri) => {
             //writing in the created file
             await File.writeAsStringAsync(fileUri, content)
                                    .then(x=>console.log(x, "a"))
                                })
            return true;
     }else {
            return false;
     }

    }


     function verifyIfIsADeckFile(content:string){

        try{
        const obj = JSON.parse(content);

        if(obj?.deck){
            return true;
        }else {
            return false
        }
        }catch{
            return false;
        }
    }

    async function getFile():Promise<GetFileReturn|null>{

       const doc  = await DocumentPicker.getDocumentAsync();

       if(doc.type==="success"){
           const content = await File.readAsStringAsync(doc.uri);
       
           if(verifyIfIsADeckFile(content)){
            return JSON.parse(content) as GetFileReturn
           }

            return null


            
           
       }
       
        
    }

    async function shareFile(params: IShareFile){

       const filename = params.deckname + '.txt';
       const itWasOk = await makeFile(filename, params.content);

       if(itWasOk){
           return true;
       }else {
           return false;
       }
    //   await File.downloadAsync(File.documentDirectory + filename, File.documentDirectory +filename);
      // await Share.shareAsync(File.documentDirectory + filename, {dialogTitle:"Download" + params.deckname});

    }


    return {
        getFile,
        shareFile
    }

}