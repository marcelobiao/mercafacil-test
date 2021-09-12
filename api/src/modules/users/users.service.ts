import { Injectable } from '@nestjs/common';
import { DeleteDateColumn } from 'typeorm';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'varejaoUser',
      company: '',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string) /* : Promise<User | undefined> */ {
    return this.users.find((user) => user.username === username);
  }
}
