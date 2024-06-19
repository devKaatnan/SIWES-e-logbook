import { Log } from 'src/logs/entity/logs.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({unique: true})
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  faculty: string;

  @Column({ nullable: true })
  department: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  username: string;

  @Column({ nullable: true })
  matricNumber: string;

  @Column({ nullable: true })
  placeOfIT: string;

  @Column({ nullable: true })
  deptCoordinator: string

  @Column({ nullable: true })
  industryBasedSupervisor: string;

  @Column({ nullable: true })
  gender: string;

  @Column({ nullable: true })
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @OneToMany(() => Log, log => log.user)
  logs: Log[];
}
