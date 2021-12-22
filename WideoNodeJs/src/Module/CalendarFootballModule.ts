import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CalendarFooball } from '../Controller/ControllerCalendarFooball';
import { ServiceCalendarFootballImpl } from '../Service/ServiceCalendarFootballImpl';

@Module({
  imports: [
    ConfigModule.forRoot()
  ],
  controllers: [CalendarFooball],
  providers: [ServiceCalendarFootballImpl],
})
export class CalendarFootballModule {}