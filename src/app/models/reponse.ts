import { Question } from "./question";

export interface Reponse {
    id: number;
    reponse : string;
    votes : number;
    questions : Question;
}