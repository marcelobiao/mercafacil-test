import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbConfig from '../ormconfig';
import { ContactModule } from './modules/contacts/contact.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbConfig.postgresConfig),
    TypeOrmModule.forRoot(dbConfig.postgresConfig),
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
