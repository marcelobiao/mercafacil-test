import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { ContactModule } from './modules/contactsImporter/contact.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ name: 'default', autoLoadEntities: true }),
    TypeOrmModule.forRoot({ name: 'dbVarejao', autoLoadEntities: true }),
    TypeOrmModule.forRoot({ name: 'dbMacapa', autoLoadEntities: true }),
    ContactModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
