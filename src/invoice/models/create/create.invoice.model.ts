import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { Success, SuccessOptions } from '../../../common/models/success';
import { Failure, FailureOptions } from '../../../common/models/failure';
import { InvoiceModel } from '../invoice.model';

@ObjectType()
export class CreateInvoiceSuccess extends Success {
  constructor(
    data: InvoiceModel,
    options: SuccessOptions = {
      message: 'invoice created',
    },
  ) {
    super(options);
    this.data = data;
  }

  @Field(() => InvoiceModel)
  data: InvoiceModel;
}

@ObjectType()
export class CreateInvoiceFailure extends Failure {
  constructor(options: FailureOptions) {
    super(options);
  }
}

export const CreateInvoiceUnion = createUnionType({
  name: 'CreateInvoice',
  types: () => [CreateInvoiceSuccess, CreateInvoiceFailure],
});
