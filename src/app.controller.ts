import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { IsPublic } from './auth/decorators/is-public.decorator';
import { CurrentUser } from './auth/decorators/current-user.decorator';
import { User } from './user/entities/user.entity';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @IsPublic()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  @Post()
  setHello():string{
    return 'Hello mundo';
  }

  @Get('me')
  getMe(@CurrentUser() user:User){
    return user;
  }
}
