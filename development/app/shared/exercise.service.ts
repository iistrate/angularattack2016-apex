import {Injectable} from "@angular/core";
import {Exercise} from "./exercise";
import {exerciseList} from "./exerciseList";

@Injectable()

export class ExerciseService {
    addToQueue(e: Exercise):void {
        exerciseList.push(e);
    }
    removeFromQueue():Exercise {
        return exerciseList.shift();
    }
}