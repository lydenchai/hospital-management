import { Room } from "../Resource/Room";
import { Bed } from "../Resource/Bed";
import { Disease } from "./Disease";
import { Gender } from "./Gender";
import { Person } from "./Person";

export class Patient extends Person {
    private patientID: string;
    private sickness: Disease[];
    private room: Room;
    private bed: Bed;

    constructor(name: string, age: number, gender: Gender, patientID: string, sickness: Disease[]) {
        super(name, age, gender);
        this.patientID = patientID;
        this.sickness = sickness;
    }
}