import {Question} from "../../core/model/question";
import {QuestionRepository} from "../../core/repositories/question-repository";

export class InMemoryRepositoryImpl implements QuestionRepository {
    private questions: Map<number, Question> = new Map()

    save(question: Question): void {
        this.questions.set(question.id, question)
    }

    getAll(): Array<Question> {
        return Array.from(this.questions.values());
    }

}