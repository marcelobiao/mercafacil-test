import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import phoneformatter from 'src/utils/ phoneFormatter';
import { Repository } from 'typeorm';
import { Contact } from '../contact.entity';
import { ContactsServiceInterface } from './contactsServiceInterface';

@Injectable()
export class ContactMacapaService implements ContactsServiceInterface {
  constructor(
    @InjectRepository(Contact, 'dbMacapa')
    private readonly repo: Repository<Contact>,
  ) {}

  create(dataArray) {
    dataArray.map((data) => {
      const newContact = this.repo.create({
        name: data.name.toUpperCase(),
        cellphone: phoneformatter(data.cellphone),
      });
      this.repo.save(newContact);
    });
    return true;
  }

  index() {
    return this.repo.find();
  }
}
