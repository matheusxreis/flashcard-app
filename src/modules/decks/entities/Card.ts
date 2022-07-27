import { v4 } from "uuid";



    export class Card {

        readonly id:string;
        public seen:boolean;

        constructor(
            readonly question: string,
            readonly answer: string,
            readonly deckId: string, 
        ){
            this.id = v4();
            this.seen = false;
        }

    }