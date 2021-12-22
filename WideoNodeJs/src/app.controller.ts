import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';
const { version }  = require('../package.json');

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  @Get('/check')
  public check() {
    console.log('version N: '+version);
    return {
      service: 'api',
      status: 'ok',
      version: version,
    };
  }
}
