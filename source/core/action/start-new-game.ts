import {UserGameService} from "../service/user-game-service";
import {UserGame} from "../model/user-game";

export class StartNewGame {
    private userGameService: UserGameService


    constructor(userGameService: UserGameService) {
        this.userGameService = userGameService;
    }

    invoke(userId:number): UserGame{
        let userGame = this.userGameService.createNewGameFor(userId);
        this.userGameService.saveUserGame(userId,userGame)
        return userGame
    }

}