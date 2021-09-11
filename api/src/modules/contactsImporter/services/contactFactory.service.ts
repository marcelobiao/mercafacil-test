import { Injectable } from '@nestjs/common';
import { ContactMacapaService } from './contactMacapa.service';
import { ContactVarejaoService } from './contactVarejao.service';

@Injectable()
export class ContactFactoryService {
  constructor(
    private contactMacapaService: ContactMacapaService,
    private contactVarejaoService: ContactVarejaoService,
  ) {}

  resolve(name) {
    switch (name) {
      case 'Macapa':
        return this.contactMacapaService;
      case 'Varejao':
        return this.contactVarejaoService;
      /*       default:
        return new Error('Service type not supported'); */
    }
  }
}
