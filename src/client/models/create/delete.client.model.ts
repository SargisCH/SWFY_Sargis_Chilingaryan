import { createUnionType, ObjectType } from '@nestjs/graphql';
import { Success, SuccessOptions } from '../../../common/models/success';
import { Failure, FailureOptions } from '../../../common/models/failure';

@ObjectType()
export class DeleteClientSuccess extends Success {
  constructor(
    options: SuccessOptions = {
      message: 'Client Deleted',
    },
  ) {
    super(options);
  }
}

@ObjectType()
export class DeleteClientFailure extends Failure {
  constructor(options: FailureOptions) {
    super(options);
  }
}

export const DeleteClientUnion = createUnionType({
  name: 'DeleteClient',
  types: () => [DeleteClientSuccess, DeleteClientFailure],
});
