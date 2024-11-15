import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { ClientModel } from '../client.model';
import { Success, SuccessOptions } from '../../../common/models/success';
import { Failure, FailureOptions } from '../../../common/models/failure';
import { IPagination } from 'src/common/interfaces/pagination.interface';
import { Pagination } from 'src/common/models/pagination';

@ObjectType()
export class GetClientSuccess extends Success {
  constructor(data: ClientModel, options?: SuccessOptions) {
    super(options);
    this.data = data;
  }

  @Field(() => ClientModel)
  data: ClientModel;
}

@ObjectType()
export class GetClientsSuccess extends Success {
  constructor(
    data: { pagination: IPagination; clients: Array<ClientModel> },
    options?: SuccessOptions,
  ) {
    super(options);
    this.data = data.clients;
    this.pagination = data.pagination;
  }

  @Field(() => [ClientModel])
  data: Array<ClientModel>;

  @Field(() => Pagination)
  pagination: Pagination;
}

@ObjectType()
export class GetClientFailure extends Failure {
  constructor(options: FailureOptions) {
    super(options);
  }
}

export const GetClientUnion = createUnionType({
  name: 'GetClientById',
  types: () => [GetClientSuccess, GetClientFailure],
});

export const GetClientsUnion = createUnionType({
  name: 'GetClients',
  types: () => [GetClientsSuccess, GetClientFailure],
});
