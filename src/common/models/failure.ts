import { ObjectType } from '@nestjs/graphql';
import { ErrorCode } from '../enum/error.code';
import { AlertOptions } from '../interfaces/alert';
import { IFailure } from '../interfaces/failure.interface';

@ObjectType({
  implements: () => [IFailure],
})
export class Failure extends IFailure {
  constructor(options: FailureOptions) {
    if (options.response) {
      super(options.response);
    } else {
      super(options);
    }
  }
}

export interface FailureOptions {
  message: string;
  code?: ErrorCode;
  statusCode?: number;
  alerts?: AlertOptions[];
  response?: FailureOptions;
}
