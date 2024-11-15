import { Field, FieldOptions, Int, InterfaceType } from '@nestjs/graphql';
import { SuccessOptions } from '../models/success';
import { Alert, AlertOptions } from './alert';
import { ErrorCode } from '../enum/error.code';

@InterfaceType()
export abstract class ISuccess {
  protected constructor(options?: SuccessOptions) {
    let opt = {
      message: 'Success',
      code: ErrorCode.SUCCESS,
      statusCode: 200,
    } as SuccessOptions;
    if (options) {
      opt = { ...opt, ...options };
      this.alerts = opt.alerts;
      this.code = opt.code;
    }
    this.statusCode = opt.statusCode;
    this.message = opt.message;
  }

  @Field(() => ErrorCode, {
    nullable: true,
  } as FieldOptions<StringConstructor>)
  code?: ErrorCode = ErrorCode.SUCCESS;

  @Field(() => Int, { nullable: true })
  statusCode?: number = 200;

  @Field({ nullable: true })
  message?: string = 'Success';

  @Field(() => [Alert], { nullable: true } as FieldOptions<[Alert]>)
  alerts?: AlertOptions[] = null;
}
