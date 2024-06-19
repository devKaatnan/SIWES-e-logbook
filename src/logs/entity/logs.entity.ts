import { User } from 'src/user/enitity/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';

@Entity()
export class Log {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)'
    })
  date: Date;


  @Column({ nullable: true })
  checkIn: string;

  @Column({ nullable: true })
  checkOut: string;

  @ManyToOne(() => User, user => user.logs)
  user: User;
}
