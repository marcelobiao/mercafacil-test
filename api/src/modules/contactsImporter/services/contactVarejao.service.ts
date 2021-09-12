import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, getRepository, Repository } from 'typeorm';
import { Contact } from '../contact.entity';

@Injectable()
export class ContactVarejaoService {
  constructor(
    @InjectRepository(Contact, 'dbVarejao')
    private readonly repo: Repository<Contact>,
  ) {}

  create(dataArray) {
    dataArray.map((data) => {
      const newContact = this.repo.create({
        name: data.name.toUpperCase(),
        cellphone: data.cellphone,
      });
      this.repo.save(newContact);
    });
    return true;
  }

  index() {
    return this.repo.find();
  }
}
