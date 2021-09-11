import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forRoot({ name: 'dbVarejao' }),
    TypeOrmModule.forRoot({ name: 'dbMacapa' }),
    //TypeOrmModule.forRoot(dbConfig.postgresConfig),
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
