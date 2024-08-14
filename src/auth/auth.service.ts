import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UserPayload } from './models/UserPayload';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {  
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,

    ){}
    login(user: User): UserToken{
       const payload:UserPayload={
           sub: user.id,
           email: user.email,
           name: user.name,
       }
       const jwtToken = this.jwtService.sign(payload);

       return {
        access_token: jwtToken
       }

    }
    async validateUser(email:string, password:string){
        const user = await this.userService.findByEmail(email);

        if (user){
            //checar senha
            const passwordValid = await bcrypt.compare(password, user.password)
            if (passwordValid){
                return {
                    ...user,
                    password: undefined,
                };
            }
        }
        // n achou nada
        throw new Error('Email ou Senha inválidos');
    }
}
