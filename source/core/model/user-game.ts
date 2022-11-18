import {UserGameQuestion} from "./user-game-question";
import {UserGameProgress} from "./user-game-progress";
import {AnswerResult} from "./answer-result";
import {AnswerResultType} from "./answer-result-type";

export class UserGame {
    readonly progress: UserGameProgress
    readonly question: UserGameQuestion | null

    constructor(progress: UserGameProgress, currentQuestion: UserGameQuestion | null) {
        this.question = currentQuestion;
        this.progress = progress
    }

    userPlaysNewQuestion(currentQuestion: UserGameQuestion): UserGame {
        return new UserGame(this.progress,currentQuestion)
    }

    userAnswered(answerId: number, currentTime: Date): AnswerResult {
        if (this.question === null) throw new UserGameError("User is not playing a question")
        if (this.question.isOutOfTime(currentTime)) return this.wrongAnswer(AnswerResultType.TIMEOUT)
        if( this.question.isAnswerOk(answerId) ){
            return this.rightAnswer();
        }else {
            return this.wrongAnswer(AnswerResultType.WRONG)
        }
    }

    private wrongAnswer(type: AnswerResultType): AnswerResult {
        return new AnswerResult(type, null)
    }

    private rightAnswer(): AnswerResult {
        let userGame = new UserGame(this.progress.increaseCorrectAnswers(), null);
        return new AnswerResult(AnswerResultType.RIGHT, userGame)
    }
}
class UserGameError extends Error{}

