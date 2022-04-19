"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Doctor = void 0;
var Person_1 = require("./Person");
var Status_1 = require("./Status");
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor(name, age, gender, join, doctorID, available, skill) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.doctorID = doctorID;
        _this.available = available;
        _this.skill = skill;
        return _this;
    }
    Doctor.prototype.getSalary = function () {
        var salary = 0;
        return salary = 10000;
    };
    Doctor.prototype.getDoctorID = function () {
        return this.doctorID;
    };
    Doctor.prototype.isAvailable = function () {
        if (this.available === Status_1.Status.Available) {
            return this.doctorID;
        }
    };
    return Doctor;
}(Person_1.Person));
exports.Doctor = Doctor;
