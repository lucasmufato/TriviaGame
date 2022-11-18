export interface RandomnessService {
    randomIntBetween(min: number, max: number): number;
}

export class RandomnessServiceImpl implements RandomnessService {
    randomIntBetween(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}