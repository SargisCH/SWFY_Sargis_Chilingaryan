import { Field, FieldOptions, Int, InterfaceType } from '@nestjs/graphql';
import { ErrorCode } from '../enum/error.code';
import { FailureOptions } from '../models/failure';
import { Alert } from './alert';
import { Optional } from '@nestjs/common';

@InterfaceType()
export abstract class IFailure {
  protected constructor({
    message,
    code = ErrorCode.FAILURE,
    statusCode = 400,
    alerts = null,
  }: FailureOptions) {
    this.code = code;
    this.statusCode = statusCode;
    this.message = message;
    this.alerts = alerts;
  }

  @Field(() => ErrorCode, { nullable: true } as FieldOptions<ErrorCode>)
  @Optional()
  code?: ErrorCode = ErrorCode.FAILURE;

  @Field(() => Int, { nullable: true })
  statusCode?: number = 400;

  @Field({ nullable: true })
  message?: string;

  @Field(() => [Alert] as FieldOptions<[Alert]>)
  @Optional()
  alerts?: Alert[] = null;
}
