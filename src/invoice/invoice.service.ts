import { Inject, Injectable } from '@nestjs/common';
import { CreateInvoiceArgs } from './dto/create.invoice.args';
import { InvoiceModel } from './models/invoice.model';
import { plainToInstance } from 'class-transformer';
import { InvoiceEntity } from 'src/database/postgres/entities';
import { DataSource } from 'typeorm';

@Injectable()
export class InvoiceService {
  private invoiceRepository = this.dataSource.getRepository(InvoiceEntity);
  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {}
  public async findById({ id }: { id: string }) {
    const invoiceData = await this.invoiceRepository.findOne({
      where: { id },
      relations: ['client'],
    });
    return plainToInstance(InvoiceModel, invoiceData);
  }
  public async findByClientId({ clientId }: { clientId: string }) {
    const invoiceData = await this.invoiceRepository.find({
      where: { clientid: clientId },
      relations: ['client'],
    });
    return invoiceData.map((invoice) => plainToInstance(InvoiceModel, invoice));
  }

  public async create(args: CreateInvoiceArgs) {
    const invoice = {
      ...args,
      clientid: args.clientId,
    };
    const invoiceData = this.invoiceRepository.create(invoice);
    const insertRes = await this.invoiceRepository.insert(invoiceData);
    const invoiceReturned = await this.invoiceRepository.findOneBy({
      id: insertRes.raw[0].id,
    });
    return plainToInstance(InvoiceModel, invoiceReturned);
  }
}
