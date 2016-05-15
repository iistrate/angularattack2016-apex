import {Injectable} from "@angular/core";
import {statList} from "./statList";
import {Stat} from "./stat";
@Injectable()

export class StatListService {
    insertStat(stat: Stat) {
        statList.push(stat);
    }
}