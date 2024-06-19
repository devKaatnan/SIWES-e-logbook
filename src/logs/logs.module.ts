import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogsService } from './logs.service';
import { LogsController } from './logs.controller';
import { Log } from './entity/logs.entity';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Log]), UserModule, PassportModule,
  JwtModule.register({
    secret: 'topSecret51',  // Use a more secure secret in production
    signOptions: {
      expiresIn: 3600,  // Token expiration time in seconds
    },
  }),
],
  controllers: [LogsController],
  providers: [LogsService],
})
export class LogsModule {}
