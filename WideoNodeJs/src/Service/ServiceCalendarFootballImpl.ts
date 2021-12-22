import { Injectable } from '@nestjs/common';
import { CalendarFootball } from '../Model/CalendarFootball'
import { Round } from '../Model/Round'
import { RequesTeams } from '../Dto/RequestTeams';

@Injectable()
export class ServiceCalendarFootballImpl {

        calendarFootball(teams: RequesTeams) {

        // const teams = ["Barcelona", "Real Madrid", "Boca", "River"];
        let calendar: CalendarFootball[] = [];
        let rnd: number = 1;
        let lsRound: Round[] = [];
        console.log(teams)
        let iter = 0

        for (let k of teams.teams) {
            for (let j of teams.teams) {
                if (k !== j) {
                    let match: CalendarFootball = new CalendarFootball;
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
                                }
                            } else {
                                match = {
                                    local: local,
                                    visitor: visitor
                                }
                            }
                        }

                    } else {
                        match = {
                            local: local,
                            visitor: visitor
                        }
                    }

                    if (match.visitor && match.local) {
                        calendar.push(match);
                        let r: Round;
                        r = {
                            round: rnd,
                            calendarFootball: match  
                        }
                        lsRound.push(r);

                        if (rnd === 2) {
                            rnd = 1;
                        } else {
                            rnd = 2;
                        }
                    }
                }
            }
        }

        let json = JSON.stringify(lsRound);
        return json;
    }
}