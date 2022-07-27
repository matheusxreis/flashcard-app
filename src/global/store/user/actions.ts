import { userTypes } from "./types";

interface ISignIn {
    name: string, 
    id:string,
    photo:string,
}

export function signIn(params: ISignIn){
    const { name, id, photo } = params;
    return {
        type: userTypes.signIn,
        payload: {
            name, 
            id,
            photo
        }
    }
}

export function signOut(){
    return {
        type: userTypes.signOut
    }
}


export function agree(){
    return {
        type: userTypes.agree
    }
}