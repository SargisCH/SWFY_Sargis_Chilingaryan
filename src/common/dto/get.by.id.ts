import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class GetByIdArgs {
  @Field(() => String)
  id: string;
}

@InputType()
export class GetByClientIdArgs {
  @Field(() => String)
  clientId: string;
}
