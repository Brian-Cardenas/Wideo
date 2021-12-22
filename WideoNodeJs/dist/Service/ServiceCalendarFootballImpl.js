"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceCalendarFootballImpl = void 0;
const common_1 = require("@nestjs/common");
const CalendarFootball_1 = require("../Model/CalendarFootball");
let ServiceCalendarFootballImpl = class ServiceCalendarFootballImpl {
    calendarFootball(teams) {
        let calendar = [];
        let rnd = 1;
        let lsRound = [];
        console.log(teams);
        let iter = 0;
        for (let k of teams.teams) {
            for (let j of teams.teams) {
                if (k !== j) {
                    let match = new CalendarFootball_1.CalendarFootball;
                    const local = k;
                    const visitor = j;
                    if (calendar) {
                        let aux = false;
                        let auxLocal = false;
                        for (let ca of calendar) {
                            if ((ca.local === visitor && ca.visitor === local)
                                || (ca.local === local && ca.visitor === visitor)) {
                                aux = true;
                            }
                            if (ca.local === local) {
                                auxLocal = true;
                            }
                        }
                        if (!aux) {
                            if (auxLocal) {
                                match = {
                                    local: visitor,
                                    visitor: local
                                };
                            }
                            else {
                                match = {
                                    local: local,
                                    visitor: visitor
                                };
                            }
                        }
                    }
                    else {
                        match = {
                            local: local,
                            visitor: visitor
                        };
                    }
                    if (match.visitor && match.local) {
                        calendar.push(match);
                        let r;
                        r = {
                            round: rnd,
                            calendarFootball: match
                        };
                        lsRound.push(r);
                        if (rnd === 2) {
                            rnd = 1;
                        }
                        else {
                            rnd = 2;
                        }
                    }
                }
            }
        }
        let json = JSON.stringify(lsRound);
        return json;
    }
};
ServiceCalendarFootballImpl = __decorate([
    common_1.Injectable()
], ServiceCalendarFootballImpl);
exports.ServiceCalendarFootballImpl = ServiceCalendarFootballImpl;
//# sourceMappingURL=ServiceCalendarFootballImpl.js.map