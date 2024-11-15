import { MigrationInterface, QueryRunner } from 'typeorm';

export class ClientInvoiceRelation1731702425455 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE invoices ADD COLUMN clientId VARCHAR`);
    await queryRunner.query(
      `ALTER TABLE invoices ADD CONSTRAINT fk_client FOREIGN KEY (clientId) REFERENCES clients(id) ON DELETE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE invoices DROP CONSTRAINT fk_client`);
    await queryRunner.query(`ALTER TABLE invoices DROP COLUMN clientId`);
  }
}
