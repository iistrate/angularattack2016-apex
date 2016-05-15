import {Exercise} from "./exercise";

export class Stat {
    exercise: Exercise;
    sets: Array<{}>;

    constructor(e: Exercise, s: Array<{}>) {
        this.exercise = e;
        this.sets = s;
    }
}