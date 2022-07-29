import { v4 } from "uuid";


type levels = "easy" | "ok" | "hard"
    export class Card {

        public seen:boolean;

        constructor(
            readonly question: string,
            readonly answer: string,
            readonly deckId: string, 
            readonly id = v4(),
            public level:levels = "easy"
        ){
            this.seen = false;
        }

    }