import { ArgumentsHost, Catch, HttpException } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { Failure, FailureOptions } from '../models/failure';
import { ClassConstructor } from 'class-transformer';

@Catch(HttpException)
export class HttpExceptionFilter<F extends Failure>
  implements GqlExceptionFilter
{
  constructor(private readonly clsModel: ClassConstructor<F>) {}
  catch(exception: HttpException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    gqlHost.switchToHttp();
    const res = exception.getResponse() as FailureOptions;
    return new this.clsModel(res);
  }
}
