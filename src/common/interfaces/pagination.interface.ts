import { Field, FieldOptions, Int, InterfaceType } from '@nestjs/graphql';

export interface IPaginationOptions {
  total: number;
  page: number;
  totalPages: number;
}

@InterfaceType()
export abstract class IPagination {
  protected constructor(options?: IPaginationOptions) {
    this.page = options.page;
    this.total = options.total;
    this.totalPages = options.totalPages;
  }

  @Field(() => Int as FieldOptions<StringConstructor>)
  page: number;

  @Field(() => Int)
  total: number;

  @Field(() => Int)
  totalPages: number;
}
