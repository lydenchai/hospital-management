import { DateTime } from "../DateTime/DateTime";
import { Gender } from "./Gender";
import { Person } from "./Person";
import { Status } from "./Status";
import { Skill } from "./Skill";

export class Doctor extends Person{
    private doctorID: string;
    private skill: Skill[];
    private available: Status;
    private join: DateTime;
    constructor(name: string, age: number, gender: Gender, join: DateTime, doctorID: string, available: Status, skill: Skill[]) {
        super(name, age, gender);
        this.doctorID = doctorID;
        this.available = available;
        this.skill = skill;
    }
    getSalary(): number{
        let salary = 0;
        return salary = 10000;
    }
    getDoctorID(): string{
        return this.doctorID;
    }
    isAvailable(){
        if ( this.available === Status.Available){
            return this.doctorID;
        }
    }
}