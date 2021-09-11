import { Exclude } from 'class-transformer';
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';

import { v4 as uuidV4 } from 'uuid';

@Entity('contacts')
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Exclude({
    toPlainOnly: true,
  })
  id: number;
  @Column('text')
  uuid: string;
  @Column('text')
  name: string;
  @Column('text')
  cellphone: string;
  @Column('timestamp')
  created_at: Timestamp;
  @Column('timestamp')
  updated_at: Timestamp;

  constructor() {
    super();
    if (!this.uuid) {
      this.uuid = uuidV4();
    }
  }
}
