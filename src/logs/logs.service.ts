import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/enitity/user.entity';
import { Log } from './entity/logs.entity';
import { CreateLogDto } from './dto/create-logs.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LogsService {
  constructor(
    @InjectRepository(Log)
    private logRepository: Repository<Log>,
    private userService: UserService
  ) {}

  async createLog(createLogDto: CreateLogDto, userId: string): Promise<Log> {
    const user = await this.userService.getUser(userId)
    const log = this.logRepository.create({
      ...createLogDto,
      user,
    });

    await this.logRepository.save(log);
    return log;
  }

  async getLogsByDate(user: User, date: Date): Promise<Log[]> {
    return this.logRepository.find({
      where: { user, date },
    });
  }

  async updateLog(date: Date, updateData: Partial<Log>, userId: string): Promise<Log> {
    const user = await this.userService.getUser(userId)
    const log = await this.logRepository.findOne({ where: { date, user } });

    if (!log) {
      throw new NotFoundException('Log not found');
    }

    Object.assign(log, updateData);
    await this.logRepository.save(log);
    return log;
  }
}
