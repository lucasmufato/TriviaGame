import {UserGameService} from "../service/user-game-service";
import {ClockService} from "../service/clock-service";

export class AnswerQuestion{
    private userGameService: UserGameService
    private clockService: ClockService

    constructor(userGameService: UserGameService, clockService: ClockService) {
        this.userGameService = userGameService;
        this.clockService = clockService;
    }

    invoke(userId: number, answerId: number){
        const game = this.userGameService.getCurrentGameFor(userId);
        if(game === null) throw new Error(`User ${userId} has NOT started a game yet.`)
        let result = game.userAnswered(answerId, this.clockService.getCurrentTime());
        if (result.isCorrect()) {
            this.userGameService.saveUserGame(userId, result.userGame!!)
        } else {
            this.userGameService.deleteGameFor(userId)

        }
        return result
    }

}