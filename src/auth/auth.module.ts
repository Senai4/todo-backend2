import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller'; // Ele está sendo importado?
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'SEU_SEGREDO_SUPER_SECRETO',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  // 3. O AuthController DEVE estar listado aqui.
  //    Se este array estiver faltando ou vazio, o NestJS não saberá sobre suas rotas.
  controllers: [AuthController],
})
export class AuthModule {}