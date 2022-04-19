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
exports.Appointment = void 0;
var DateTime_1 = require("./DateTime");
var Appointment = /** @class */ (function (_super) {
    __extends(Appointment, _super);
    function Appointment(date, time, room) {
        var _this = _super.call(this, date, time) || this;
        _this.room = room;
        return _this;
    }
    Appointment.prototype.getInfo = function () {
        return this.patientID + "is need to date with " + this.hospital.checkDoctor() + "at "
            + this.date + " and " + this.time + "in" + this.room + "room";
    };
    return Appointment;
}(DateTime_1.DateTime));
exports.Appointment = Appointment;
