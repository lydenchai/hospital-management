import { RoomType } from "../Resource/RoomType";
import { Patient } from "../Person/Patient";
import { Hospital } from "../Hospital";
import { DateTime } from "./DateTime";

export class Appointment extends DateTime{
    private patientID: Patient;
    private room: RoomType;
    private hospital: Hospital;
    constructor(date: string, time: string, room: RoomType) {
        super( date, time);
        this.room = room;
    }
    getInfo():string{
        return this.patientID + "date with"
        + this.hospital.checkDoctor() + "at" 
        + this.date + " and " + this.time+"in" 
        + this.room + "room";
    }
}