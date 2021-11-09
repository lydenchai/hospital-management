import { Patient } from "../Person/Patient";
import { Resource } from "./Resource";
import { RoomType } from "./RoomType";
import { Bed } from "./Bed";

export class Room extends Resource{
    private capacity: Bed;
    private room: RoomType;
    private patientList: Patient[];
    constructor(id: string, room: RoomType) {
        super(id);
        this.room = room;
    }
    addPatient(newPatient: Patient){
        let numberOfBed = this.capacity.getPatient.length;
        if ( numberOfBed <= 4 ){
            this.patientList.push(newPatient);
        }else{
            "Full can not add!!!"
        }
    }
}