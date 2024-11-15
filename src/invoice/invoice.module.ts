import { Module } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { InvoiceResolver } from './invoice.resolver';
import { DatabaseModule } from 'src/database/postgres/modules/postgress.database';

@Module({
  imports: [DatabaseModule],
  providers: [InvoiceService, InvoiceResolver],
})
export class InvoiceModule {}
