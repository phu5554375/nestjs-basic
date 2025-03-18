
import { Get, Controller, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor (
    private readonly appService: AppService, 
    private configService : ConfigService
  ) {}
    
  
  @Get()
  @Render('home')
  handleHomePage() {
    console.log("check port")
    const message1 = this.appService.getHello();
    return{
      message1: message1
    }
  }
}