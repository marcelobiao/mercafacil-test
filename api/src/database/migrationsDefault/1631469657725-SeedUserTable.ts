import { User } from 'src/modules/users/users.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUserTable1631469657725 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const productRepo = queryRunner.connection.getRepository(User);

    await productRepo.insert([
      {
        //id: 1,
        name: 'MacapaUser',
        company: 'Macapa',
        password: 'teste',
      },
      {
        //id: 1,
        name: 'VarejaoUser',
        company: 'Varejao',
        password: 'teste',
      },
    ]);
  }

  public async down(): Promise<void> {}
}
