import {UserGame} from "../model/user-game";

export interface UserGameRepository {
    getGameFor(userId: number): UserGame | null;

    save(userGame: UserGame, userId: number): void;

    deleteByUser(userId: number): void;
}

export class UserGameRepositoryImpl implements UserGameRepository {

    private games: Map<number, UserGame> = new Map()

    getGameFor(userId: number): UserGame | null {
        let userGame = this.games.get(userId);
        console.log(`usergame is ${userGame}`)
        console.log(this.games)
        if (userGame === undefined) return null
        return userGame
    }

    save(userGame: UserGame, userId: number): void {
        this.games.set(userId, userGame)
    }

    deleteByUser(userId: number): void {
        this.games.delete(userId)
    }
}