import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LogsModule } from './logs/logs.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true
  }),
  UserModule, 
  LogsModule,
  PassportModule
],
  controllers: [],
})
export class AppModule {}
