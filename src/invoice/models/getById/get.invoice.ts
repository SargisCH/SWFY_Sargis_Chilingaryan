import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { InvoiceModel } from '../invoice.model';
import { Success, SuccessOptions } from '../../../common/models/success';
import { Failure, FailureOptions } from '../../../common/models/failure';

@ObjectType()
export class GetInvoiceSuccess extends Success {
  constructor(data: InvoiceModel, options?: SuccessOptions) {
    super(options);
    this.data = data;
  }

  @Field(() => InvoiceModel)
  data: InvoiceModel;
}

@ObjectType()
export class GetInvoiceFailure extends Failure {
  constructor(options: FailureOptions) {
    super(options);
  }
}

export const GetInvoiceUnion = createUnionType({
  name: 'GetInvoiceById',
  types: () => [GetInvoiceSuccess, GetInvoiceFailure],
});
