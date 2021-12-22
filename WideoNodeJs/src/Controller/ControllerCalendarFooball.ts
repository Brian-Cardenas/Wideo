import {
    Body,
    Controller,
    Get
} from '@nestjs/common';
import { ServiceCalendarFootballImpl } from '../Service/ServiceCalendarFootballImpl';
import { RequesTeams } from '../Dto/RequestTeams';

@Controller()
export class CalendarFooball {

    constructor(private serviceCalendar: ServiceCalendarFootballImpl) { }

    @Get('/getCalendar')
    public getCalendarFootball(
        @Body() request:RequesTeams
    ) {
        return this.serviceCalendar.calendarFootball(request)
    }

}