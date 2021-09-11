import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contacts')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Get()
  index() {
    return this.contactService.index();
  }

  @Get(':uuid')
  get(@Param() params) {
    return this.contactService.get(params.uuid);
  }

  @Post()
  create(
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    createNoteDTO,
  ) {
    return this.contactService.create(createNoteDTO);
  }

  @Put(':uuid')
  update(
    @Param() params,
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    updateNoteDTO,
  ) {
    return this.contactService.update(params.uuid, updateNoteDTO);
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param() params) {
    this.contactService.delete(params.id);
  }
}
