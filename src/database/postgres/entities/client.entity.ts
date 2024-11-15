import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InvoiceEntity } from './invoice.entity';

@Entity('clients')
export class ClientEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  name?: string;

  @Column()
  email?: string;

  @OneToMany(() => InvoiceEntity, (invoice) => invoice.client)
  invoices: InvoiceEntity[];
}
