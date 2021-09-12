import {
  Controller,
  Get,
  Post,
  Request,
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
  uploadFile(@UploadedFile() file: Express.Multer.File, @Request() req) {
    try {
      const data = JSON.parse(file.buffer.toString());
      const contactService = this.contactFactoryService.resolve(
        req.user.company,
      );
      contactService.create(data['contacts']);
    } catch (err) {
      console.log(err);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  index(@Request() req) {
    try {
      const contactService = this.contactFactoryService.resolve(
        req.user.company,
      );
      return contactService.index();
    } catch (err) {
      console.log(err);
    }
  }
}
