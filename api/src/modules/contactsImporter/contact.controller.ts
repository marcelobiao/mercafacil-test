import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ContactFactoryService } from './services/contactFactory.service';

@Controller('contacts')
export class ContactController {
  constructor(private contactFactoryService: ContactFactoryService) {}

  @UseGuards(JwtAuthGuard)
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

  @UseGuards(JwtAuthGuard)
  @Get()
  index() {
    try {
      const contactService = this.contactFactoryService.resolve('Varejao');
      return contactService.index();
    } catch (err) {
      console.log(err);
    }
  }
}
