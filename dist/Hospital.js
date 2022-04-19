"use strict";
exports.__esModule = true;
exports.Hospital = void 0;
var Hospital = /** @class */ (function () {
    function Hospital(name, address) {
        this.name = name;
        this.address = address;
    }
    Hospital.prototype.addRoom = function (newRoom) {
        return this.rooms.push(newRoom);
    };
    Hospital.prototype.addBed = function (newBed) {
        return this.beds.push(newBed);
    };
    Hospital.prototype.addPatient = function (newPatient) {
        return this.patients.push(newPatient);
    };
    Hospital.prototype.addDoctor = function (newDoctor) {
        return this.doctors.push(newDoctor);
    };
    Hospital.prototype.checkDoctor = function () {
        for (var _i = 0, _a = this.doctors; _i < _a.length; _i++) {
            var doctor = _a[_i];
            if (doctor.isAvailable()) {
                return doctor.getDoctorID();
            }
        }
    };
    Hospital.prototype.addAppointment = function (newAP) {
        return this.appointments.push(newAP);
    };
    return Hospital;
}());
exports.Hospital = Hospital;
