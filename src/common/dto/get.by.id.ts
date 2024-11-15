import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdArgs {
  @Field(() => String)
  id: string;
}
