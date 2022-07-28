import { v4 } from "uuid";
import { Card } from "./Card";


export class Deck {

    id:string;

    constructor(
        readonly title: string,
        readonly authorId: string,
        readonly authorName: string, 
        readonly createdAt: number, 
        public cards: Card[] = [],
        readonly shared: boolean = false,
    ){

        this.id = v4();

    }
}