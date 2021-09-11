import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as dotenv from 'dotenv';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
const env = dotenv.config();

if (env.error) {
  throw env.error;
}

const postgresConfig: PostgresConnectionOptions = {
  type: 'postgres',
  name: 'dbp',
  host: env.parsed.DB_HOST,
  port: +env.parsed.DB_PORT,
  username: env.parsed.DB_USERNAME,
  password: env.parsed.DB_PASSWORD,
  database: env.parsed.DB_DATABASE_NAME,
  //synchronize: true
  entities: ['dist/**/*.entity.js'],
  migrationsTableName: 'migrations',
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

const mysqlConfig: MysqlConnectionOptions = {
  type: 'mysql',
  name: 'dbm',
  host: env.parsed.DB_HOST,
  port: +env.parsed.DB_PORT,
  username: env.parsed.DB_USERNAME,
  password: env.parsed.DB_PASSWORD,
  database: env.parsed.DB_DATABASE_NAME,
  //synchronize: true
  entities: ['dist/**/*.entity.js'],
  migrationsTableName: 'migrations',
  migrations: ['dist/src/database/migrations/*.js'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default { postgresConfig };
