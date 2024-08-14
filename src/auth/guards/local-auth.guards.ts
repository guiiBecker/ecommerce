import {
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { AuthGuard } from '@nestjs/passport';
  
  @Injectable()
  export class LocalAuthGuard extends AuthGuard('local') {
    canActivate(context: ExecutionContext) {
      return super.canActivate(context);
    }
  

// tratamento de erro, o guia não desenvolveu essa parte aqui   
    handleRequest(err, user) {
      if (err || !user) {
        throw new UnauthorizedException(err?.message);
      }
  
      return user;
    }
  }