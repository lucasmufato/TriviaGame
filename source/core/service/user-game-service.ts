import {UserGame} from "../model/user-game";
import {UserGameRepository} from "./user-game-repository";
import {UserGameProgress} from "../model/user-game-progress";

export interface UserGameService {
    getCurrentGameFor(userId: number): UserGame | null;

    saveUserGame(userId: number, userGame: UserGame): void;

    createNewGameFor(userId: number): UserGame;

    deleteGameFor(userId: number): void;
}

export class UserGameServiceImpl implements UserGameService {
    private repository: UserGameRepository

    constructor(userGameRepository: UserGameRepository) {
        this.repository = userGameRepository;
    }

    getCurrentGameFor(userId: number): UserGame | null {
        return this.repository.getGameFor(userId)
    }

    saveUserGame(userId: number, userGame: UserGame): void {
        this.repository.save(userGame, userId)
    }

    createNewGameFor(userId: number): UserGame {
        return new UserGame(new UserGameProgress(1,0), null)
    }

    deleteGameFor(userId: number): void {
        this.repository.deleteByUser(userId);
    }
}