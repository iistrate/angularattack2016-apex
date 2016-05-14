export class Exercise {
    description: string;
    sets: number;
    reps: number;
    weight: number;

    constructor(d: string, s: number, r: number, w: number) {
        this.description = d;
        this.sets = s;
        this.weight = w;
        this.reps = r;
    }
}