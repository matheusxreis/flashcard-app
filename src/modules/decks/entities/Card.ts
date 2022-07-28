import { v4 } from "uuid";



    export class Card {

        public seen:boolean;

        constructor(
            readonly question: string,
            readonly answer: string,
            readonly deckId: string, 
            readonly id = v4(),
        ){
            this.seen = false;
        }

    }