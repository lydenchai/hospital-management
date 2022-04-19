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
exports.Room = void 0;
var Resource_1 = require("./Resource");
var Room = /** @class */ (function (_super) {
    __extends(Room, _super);
    function Room(id, room) {
        var _this = _super.call(this, id) || this;
        _this.room = room;
        return _this;
    }
    Room.prototype.addPatient = function (newPatient) {
        var numberOfBed = this.capacity.getPatient.length;
        if (numberOfBed <= 4) {
            this.patientList.push(newPatient);
        }
        else {
            "Full can not add!!!";
        }
    };
    return Room;
}(Resource_1.Resource));
exports.Room = Room;
