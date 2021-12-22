"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarFootballModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const ControllerCalendarFooball_1 = require("../Controller/ControllerCalendarFooball");
const ServiceCalendarFootballImpl_1 = require("../Service/ServiceCalendarFootballImpl");
let CalendarFootballModule = class CalendarFootballModule {
};
CalendarFootballModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot()
        ],
        controllers: [ControllerCalendarFooball_1.CalendarFooball],
        providers: [ServiceCalendarFootballImpl_1.ServiceCalendarFootballImpl],
    })
], CalendarFootballModule);
exports.CalendarFootballModule = CalendarFootballModule;
//# sourceMappingURL=CalendarFootballModule.js.map