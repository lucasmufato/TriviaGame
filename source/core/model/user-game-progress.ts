export class UserGameProgress {
    readonly level: number
    readonly correctAnswers: number

    constructor(level: number, correctAnswers: number) {
        this.level = level;
        this.correctAnswers = correctAnswers;
    }

    increaseCorrectAnswers(): UserGameProgress {
        let newLevel = this.level
        let correctAnswers = this.correctAnswers + 1
        if (correctAnswers == 2) {
            newLevel = this.level + 1
            correctAnswers = 0
        }
        return new UserGameProgress(newLevel, correctAnswers)
    }
}