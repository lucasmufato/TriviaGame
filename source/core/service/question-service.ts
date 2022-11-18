import {UserGame} from "../model/user-game";
import {Question} from "../model/question";
import {QuestionRepository} from "../repositories/question-repository";
import {RandomnessService} from "./randomness-service";

export interface QuestionService {
    findRandomQuestionForGame(userId: number, currentLevel: UserGame): Question;
}

export class QuestionServiceImpl implements QuestionService {
    private questionRepository: QuestionRepository
    private randomnessProvider: RandomnessService

    constructor(questionRepository: QuestionRepository, randomnessProvider: RandomnessService) {
        this.questionRepository = questionRepository;
        this.randomnessProvider = randomnessProvider;
    }

    findRandomQuestionForGame(userId: number, currentLevel: UserGame): Question {
        let levelQuestions = this.questionRepository.getAll().filter(q => q.level === currentLevel.progress.level)
        if (levelQuestions.length === 0) throw Error(`there are no questions for level ${currentLevel.progress.level}`)
        let randomQuestionIndex = this.randomnessProvider.randomIntBetween(0, levelQuestions.length - 1)
        return levelQuestions[randomQuestionIndex]
    }

}