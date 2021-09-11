import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from './contact.entity';
import { NIL as NIL_UUID } from 'uuid';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact) private noteRepository: Repository<Contact>,
  ) {}

  index(): Promise<Contact[]> {
    return this.noteRepository.find();
  }

  async get(uuid: NIL_UUID): Promise<Contact> {
    try {
      const note = await this.noteRepository.findOneOrFail({
        uuid,
      });
      return note;
    } catch (err) {
      throw err;
    }
  }

  async create(createContactDTO): Promise<Contact[]> {
    const newNote = this.noteRepository.create(createContactDTO);
    return await this.noteRepository.save(newNote);
  }

  async update(uuid: NIL_UUID, updateContactDTO): Promise<Contact> {
    const note = await this.get(uuid);
    Object.assign(note, updateContactDTO);
    return await this.noteRepository.save(note);
  }

  async delete(uuid: NIL_UUID) {
    try {
      const note = await this.get(uuid);
      await this.noteRepository.remove(note);
    } catch (err) {
      throw err;
    }
  }
}
