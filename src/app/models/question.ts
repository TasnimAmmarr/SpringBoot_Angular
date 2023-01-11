import { Categorie } from "./categorie";
import { Reponse } from "./reponse";

export interface Question {
    id: number;
    text: string;
    categorie: Categorie;
    status: string;
    liste: Reponse;
}