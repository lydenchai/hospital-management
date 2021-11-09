import { Appointment } from "./src/DateTime/Appointment";
import { RoomType } from "./src/Resource/RoomType";
import { DateTime } from "./src/DateTime/DateTime";
import { Disease } from "./src//Person/Disease";
import { Patient } from "./src/Person/Patient";
import { Doctor } from "./src//Person/Doctor";
import { Status } from "./src//Person/Status";
import { Gender } from "./src/Person/Gender";
import { Room } from "./src/Resource/Room";
import { Skill } from "./src/Person/Skill";
import { Hospital } from "./src/Hospital";
import { Bed } from "./src/Resource/Bed";

let hospital = new Hospital("Angkor HOSPITAL","Phnom Penh");
let doctorJoin= new DateTime("10/10/2005", "7:30 AM");
let doctor = new Doctor("Sovanda", 35, Gender.MALE, doctorJoin, "D001", Status.Available, [Skill.FEVER]);
let patient1 = new Patient("Romdul", 20, Gender.FEMALE, "P001", [Disease.Fever, Disease.Teeth]);
let patient2 = new Patient("Samang", 19, Gender.MALE, "P002", [Disease.HeartDisease]);
let appointmentRoom = new Room("B05", RoomType.Appointment);
let bed = new Bed("A03");
let scedule = new Appointment("11/11/2021","01:30 PM", RoomType.Appointment)

hospital.addBed(bed);
hospital.addDoctor(doctor);
hospital.addPatient(patient1);
hospital.addPatient(patient2);
hospital.addAppointment(scedule);
scedule.getInfo();
console.log(scedule);
