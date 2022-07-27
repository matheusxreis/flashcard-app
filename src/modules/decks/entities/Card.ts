import { v4 } from "uuid";



    export class Card {

        id:string;

        constructor(
            readonly question: string,
            readonly answer: string,
            readonly deckId: string, 
        ){
            this.id = v4();
        }

    }