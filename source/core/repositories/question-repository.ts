import {Question} from "../model/question";

export interface QuestionRepository {
    save(question: Question): void;
    getAll(): Array<Question>;
}

