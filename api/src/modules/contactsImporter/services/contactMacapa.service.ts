import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import IMask from 'imask';
import { getManager, getRepository, Repository } from 'typeorm';
import { Contact } from '../contact.entity';

@Injectable()
export class ContactMacapaService {
  constructor(
    @InjectRepository(Contact, 'dbMacapa')
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
}
