import {QuestionRepository} from "../../repositories/question-repository";

export class GetAllQuestions{
    private repository: QuestionRepository

    constructor(repository: QuestionRepository) {
        this.repository = repository;
    }

    invoke(){
        return this.repository.getAll()
    }
}