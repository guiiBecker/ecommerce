import {
    Body,
    Controller,
    HttpCode,
    HttpStatus,
    Post,
    Req,
    Request,
    UseGuards,
  } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guards';
import { AuthRequest } from './models/AuthRequest';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){
        @HttpCode(HttpStatus.OK)
        @Post('login')
        @UseGuards(LocalAuthGuard)
        login (@Request() req: AuthController){
            return this.authService.login(req.user)
        }

     }
    }




