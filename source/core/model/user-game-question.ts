import {Question} from "./question";

export class UserGameQuestion {
    readonly currentQuestion: Question
    readonly answerTime: Date

    constructor(currentQuestion: Question, answerTime: Date) {
        this.currentQuestion = currentQuestion;
        this.answerTime = answerTime;
    }

    isOutOfTime(currentTime: Date): boolean {
        return this.answerTime < currentTime
    }

    isAnswerOk(answerId: number) {
        return this.currentQuestion.isAnswerOk(answerId);
    }
}