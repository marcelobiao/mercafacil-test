import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

@Entity('contacts')
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  name: string;
  @Column('text')
  cellphone: string;
  /*   @Column('timestamp')
  created_at: Timestamp;
  @Column('timestamp')
  updated_at: Timestamp; */
}
