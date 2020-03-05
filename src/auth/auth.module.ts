import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user/user.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
    imports: [TypeOrmModule.forFeature([User]),
    JwtModule.register({
        secretOrPrivateKey: 'secret12356789'
    })
    ],
    providers: [UserService, AuthService,JwtStrategy],
    controllers: [AuthController]
})
export class AuthModule { }