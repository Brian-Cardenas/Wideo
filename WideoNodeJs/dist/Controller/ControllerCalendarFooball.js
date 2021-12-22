"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarFooball = void 0;
const common_1 = require("@nestjs/common");
const ServiceCalendarFootballImpl_1 = require("../Service/ServiceCalendarFootballImpl");
const RequestTeams_1 = require("../Dto/RequestTeams");
let CalendarFooball = class CalendarFooball {
    constructor(serviceCalendar) {
        this.serviceCalendar = serviceCalendar;
    }
    getCalendarFootball(request) {
        return this.serviceCalendar.calendarFootball(request);
    }
};
__decorate([
    common_1.Get('/getCalendar'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RequestTeams_1.RequesTeams]),
    __metadata("design:returntype", void 0)
], CalendarFooball.prototype, "getCalendarFootball", null);
CalendarFooball = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [ServiceCalendarFootballImpl_1.ServiceCalendarFootballImpl])
], CalendarFooball);
exports.CalendarFooball = CalendarFooball;
//# sourceMappingURL=ControllerCalendarFooball.js.map