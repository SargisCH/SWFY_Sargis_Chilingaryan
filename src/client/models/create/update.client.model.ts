import { createUnionType, Field, ObjectType } from '@nestjs/graphql';
import { Success, SuccessOptions } from '../../../common/models/success';
import { Failure, FailureOptions } from '../../../common/models/failure';
import { ClientModel } from '../client.model';

@ObjectType()
export class UpdateClientSuccess extends Success {
  constructor(
    data: ClientModel,
    options: SuccessOptions = {
      message: 'Client Updated',
    },
  ) {
    super(options);
    this.data = data;
  }

  @Field(() => ClientModel)
  data: ClientModel;
}

@ObjectType()
export class UpdateClientFailure extends Failure {
  constructor(options: FailureOptions) {
    super(options);
  }
}

export const UpdateClientUnion = createUnionType({
  name: 'UpdateClient',
  types: () => [UpdateClientSuccess, UpdateClientFailure],
});
