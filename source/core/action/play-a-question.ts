import {ClockService} from "../service/clock-service";
import {QuestionService} from "../service/question-service";
import {UserGameService} from "../service/user-game-service";
import {UserGameQuestion} from "../model/user-game-question";


class QuestionToPlay {
    readonly text: string
    readonly responses: string[]
    readonly answerTime: Date

    constructor(text: string, responses: string[], answerTime: Date) {
        this.text = text;
        this.responses = responses;
        this.answerTime = answerTime;
    }
}

export class PlayAQuestion {
    private userGameService: UserGameService
    private questionService: QuestionService
    private clockService: ClockService;

    constructor(clockService: ClockService, userGameService: UserGameService, questionService: QuestionService) {
        this.clockService = clockService;
        this.userGameService = userGameService;
        this.questionService = questionService;
    }

    invoke(userId:number){
        let currentGame = this.userGameService.getCurrentGameFor(userId);
        if (currentGame === null) throw new Error(`User ${userId} has NOT started a game yet.`)

        let question = this.questionService.findRandomQuestionForGame(userId, currentGame)
        let endTime = this.clockService.getCurrentTimePlusSeconds(20);
        let userGameQuestion = new UserGameQuestion(question, endTime);
        let updatedCurrentGame = currentGame.userPlaysNewQuestion(userGameQuestion)

        this.userGameService.saveUserGame(userId, updatedCurrentGame)
        return new QuestionToPlay(question.text, question.responses, userGameQuestion.answerTime)
    }

}