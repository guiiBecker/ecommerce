import {
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards,
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guards';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){


    @Post('login')
    @HttpCode(HttpStatus.OK)
    @UseGuards(LocalAuthGuard)
    login(){
        return this.authService.login();
        }
    }
}


function login() {
    throw new Error('Function not implemented.');
}

