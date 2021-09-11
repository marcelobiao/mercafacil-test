import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('contacts')
export class ContactController {
  @Get()
  index() {
    return 'teste';
  }
}
