import { Controller, Post, Body, UseGuards, Get, Param, Patch, Request } from '@nestjs/common';
import { LogsService } from './logs.service';
import { User } from 'src/user/enitity/user.entity';
import { CreateLogDto } from './dto/create-logs.dto';
import { GetUser } from 'src/config/get-user.decorator';
import { Log } from './entity/logs.entity';
import { JwtAuthGuard } from 'src/config/jwt-auth.guard';
import { AuthGuard } from 'src/config/authenticated.guard';

@Controller('logs')
@UseGuards(JwtAuthGuard)
export class LogsController {
  constructor(private logService: LogsService) {}

  @UseGuards(AuthGuard)
  @Post('/add')
  addLog(@Body() createLogDto: CreateLogDto, @Request() req) {
    return this.logService.createLog(createLogDto, req.user.id);
  }

  @Get(':date')
  getLogsByDate(@Param('date') createdAt: Date, @GetUser() user: User) {
    return this.logService.getLogsByDate(user, createdAt);
  }

  @Patch(':date')
  updateLog(@Param('date') date: Date, @Body() updateData: Partial<Log>, @Request() req) {
    return this.logService.updateLog(date, updateData, req.user.id);
  }
}
