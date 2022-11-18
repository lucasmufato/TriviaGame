import {UserGame} from "./user-game";
import {AnswerResultType} from "./answer-result-type";

export class AnswerResult {
    readonly result: AnswerResultType
    readonly userGame: UserGame | null

    constructor(result: AnswerResultType, userGame: UserGame | null) {
        this.userGame = userGame;
        this.result = result;
    }

    isCorrect() {
        return this.result === AnswerResultType.RIGHT
    }
}