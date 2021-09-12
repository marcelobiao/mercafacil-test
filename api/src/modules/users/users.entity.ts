import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  name: string;
  @Column('text')
  company: string;
  @Column('text')
  password: string;
}
