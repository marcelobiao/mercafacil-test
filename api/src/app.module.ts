import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { ContactModule } from './modules/contactsImporter/contact.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'sqlite',
      database: '../db/default.sq3',
      synchronize: false,
      entities: ['dist/**/*.entity.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/src/database/migrationsDefault/*.js'],
      cli: {
        migrationsDir: 'src/database/migrationsDefault',
      },
    }),
    TypeOrmModule.forRoot({
      name: 'dbVarejao',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin',
      database: 'admin',
      synchronize: false,
      entities: ['dist/**/*.entity.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/src/database/migrationsVarejao/*.js'],
      cli: {
        migrationsDir: 'src/database/migrationsVarejao',
      },
    }),
    TypeOrmModule.forRoot({
      name: 'dbMacapa',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'admin',
      database: 'admin',
      synchronize: false,
      entities: ['dist/**/*.entity.js'],
      migrationsTableName: 'migrations',
      migrations: ['dist/src/database/migrationsMacapa/*.js'],
      cli: {
        migrationsDir: 'src/database/migrationsMacapa',
      },
    }),
    ContactModule,
    AuthModule,
    UsersModule,
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
