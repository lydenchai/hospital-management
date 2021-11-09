import { Appointment } from "./DateTime/Appointment";
import { Patient } from "./Person/Patient";
import { Doctor } from "./Person/Doctor";
import { Room } from "./Resource/Room";
import { Bed } from "./Resource/Bed";


export class Hospital {
    private name: string;
    private address: string;
    private rooms: Room[];
    private beds: Bed[];
    private patients: Patient[];
    private doctors: Doctor[];
    private appointments: Appointment[];
    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }
    addRoom(newRoom:Room){
        return this.rooms.push(newRoom);
    }
    addBed(newBed:Bed){
        return this.beds.push(newBed);
    }
    addPatient(newPatient:Patient){
        return this.patients.push(newPatient);
    }
    addDoctor(newDoctor:Doctor){
        return this.doctors.push(newDoctor);
    }
    checkDoctor():string{
        for(let doctor of this.doctors){
            if(doctor.isAvailable()){
                return doctor.getDoctorID();
            }
        }
    }
    addAppointment(newAP:Appointment){
        return this.appointments.push(newAP);
    }
}
    