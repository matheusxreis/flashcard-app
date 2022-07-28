import React from "react";

import * as Share from "expo-sharing"

import * as File from "expo-file-system";

import * as Media from "expo-media-library";


interface IShareFile {
    deckname: string,
    userId:string,
    content: string;
};

export function useFileService(){

    const extension = ".deck"


    async function makeDirectory(directoryName:string, uri:string){
        console.log("assets", uri)
            await Media.requestPermissionsAsync();
            const a =  await Media.createAssetAsync(uri)
            await Media.createAlbumAsync(directoryName, a)
    }

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

    function getFile(){}

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