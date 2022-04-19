import { Patient } from "../Person/Patient";
import { Resource } from "./Resource";

export class Bed extends Resource {
    private patient: Patient;
    constructor(id: string) {
        super(id);
    }
    getPatient(): Patient {
        return this.patient;
    }
}


