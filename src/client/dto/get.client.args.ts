import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetClientByIdArgs {
  @Field(() => String)
  id: string;
}
