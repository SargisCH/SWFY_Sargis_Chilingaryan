import { MigrationInterface, QueryRunner } from 'typeorm';

export class CliendIdString1731686185865 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "clients" ALTER COLUMN "id" TYPE VARCHAR`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "clients" ALTER COLUMN "id" TYPE INT`);
  }
}
