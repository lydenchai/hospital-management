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
exports.Patient = void 0;
var Person_1 = require("./Person");
var Patient = /** @class */ (function (_super) {
    __extends(Patient, _super);
    function Patient(name, age, gender, patientID, sickness) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.patientID = patientID;
        _this.sickness = sickness;
        return _this;
    }
    return Patient;
}(Person_1.Person));
exports.Patient = Patient;
