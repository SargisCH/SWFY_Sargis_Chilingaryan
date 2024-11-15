import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class PaginationArgs {
  @Field(() => Number, { nullable: true })
  page: number = 1;

  @Field(() => Number, { nullable: true })
  limit: number = 10;
}
