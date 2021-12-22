import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarFootballModule } from './Module/CalendarFootballModule'
@Module({
  imports: [
    ConfigModule.forRoot(),
    CalendarFootballModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
