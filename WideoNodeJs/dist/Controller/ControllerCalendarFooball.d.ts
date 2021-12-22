import { ServiceCalendarFootballImpl } from '../Service/ServiceCalendarFootballImpl';
import { RequesTeams } from '../Dto/RequestTeams';
export declare class CalendarFooball {
    private serviceCalendar;
    constructor(serviceCalendar: ServiceCalendarFootballImpl);
    getCalendarFootball(request: RequesTeams): string;
}
