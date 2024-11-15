import { ISuccess } from '../interfaces/success.interface';
import { ObjectType } from '@nestjs/graphql';
import { ErrorCode } from '../enum/error.code';
import { AlertOptions } from '../interfaces/alert';

@ObjectType({
  implements: () => [ISuccess],
})
export class Success extends ISuccess {
  constructor(options?: SuccessOptions) {
    super(options);
  }
}

export interface SuccessOptions {
  message: string;
  code?: ErrorCode;
  statusCode?: number;
  alerts?: AlertOptions[];
}
