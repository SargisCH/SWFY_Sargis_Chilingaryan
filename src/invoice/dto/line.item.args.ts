import { Field, Float, InputType } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class LineItemsArgs {
  @Field(() => String)
  @IsString()
  description: string;

  @Field(() => Float)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  amount: number;

  @Field(() => Float)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  price: number;

  @Field(() => Float)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  units: number;

  @Field(() => Float)
  @IsNumber({ allowNaN: false, allowInfinity: false })
  vat: number;
}
