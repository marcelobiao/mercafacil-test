import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ContactFactoryService } from './services/contactFactory.service';

@Controller('contacts')
export class ContactController {
  constructor(private contactFactoryService: ContactFactoryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    try {
      const data = JSON.parse(file.buffer.toString());
      const contactService = this.contactFactoryService.resolve('Varejao');
      contactService.create(data['contacts']);
    } catch (err) {
      console.log(err);
    }
  }
}
