export interface ClockService {
    getCurrentTime(): Date;

    getCurrentTimePlusSeconds(seconds: number): Date;
}

export class ClockServiceImpl implements ClockService {
    getCurrentTime(): Date {
        return new Date();
    }

    getCurrentTimePlusSeconds(seconds: number): Date {
        let milliseconds = seconds * 1000;
        let nowInMilliseconds = this.getCurrentTime().getTime();
        return new Date(nowInMilliseconds + milliseconds);
    }

}