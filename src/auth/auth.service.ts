import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,

    ){}

    async login(user:User): Promise<UserToken>{
        const payload: userPayload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        };
        return{
            acesses_token: this.jwtService.sign(payload)
        }
    }


    validateUser(email:string, password:string){
        throw new Error('')
    }
}
