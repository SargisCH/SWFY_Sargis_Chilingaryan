import { BaseModel } from '../../common/models/base.model';
import { Field, ObjectType } from '@nestjs/graphql';
import { InvoiceModel } from 'src/invoice/models/invoice.model';

@ObjectType()
export class ClientModel extends BaseModel {
  @Field(() => String)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => [InvoiceModel], { nullable: true })
  invoices?: InvoiceModel[];
}
