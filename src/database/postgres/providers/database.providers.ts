import { DataSource } from 'typeorm';
import {
  InvoiceTable1731422100036,
  ClientTable1731621635384,
  CliendIdString1731686185865,
  ClientInvoiceRelation1731702425455,
} from '../migrations';
import { InvoiceEntity } from '../entities';
import { ClientEntity } from '../entities/client.entity';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'swfy',
  entities: [InvoiceEntity, ClientEntity],
  migrations: [
    InvoiceTable1731422100036,
    ClientTable1731621635384,
    CliendIdString1731686185865,
    ClientInvoiceRelation1731702425455,
  ],
  synchronize: false,
});

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return dataSource.initialize();
    },
  },
];
