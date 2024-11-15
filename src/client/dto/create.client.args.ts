import { Field, FieldOptions, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@InputType()
export class CreateClientArgs {
  @Field(() => String, {
    nullable: true,
  } as FieldOptions<string>)
  @IsOptional()
  name?: string;
  @Field(() => String, {
    nullable: true,
  } as FieldOptions<string>)
  @IsOptional()
  email?: string;
}
