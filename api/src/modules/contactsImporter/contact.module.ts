import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactController } from './contact.controller';
import { Contact } from './contact.entity';
import { ContactFactoryService } from './services/contactFactory.service';
import { ContactMacapaService } from './services/contactMacapa.service';
import { ContactVarejaoService } from './services/contactVarejao.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contact], 'dbMacapa'),
    TypeOrmModule.forFeature([Contact], 'dbVarejao'),
  ],
  controllers: [ContactController],
  providers: [
    ContactFactoryService,
    ContactMacapaService,
    ContactVarejaoService,
  ],
})
export class ContactModule {}
