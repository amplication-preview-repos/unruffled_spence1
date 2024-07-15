/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ServiceCreateNestedManyWithoutBookingsInput } from "./ServiceCreateNestedManyWithoutBookingsInput";
import { ServiceWhereUniqueInput } from "../../service/base/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class BookingCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  datetime?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ServiceCreateNestedManyWithoutBookingsInput,
  })
  @ValidateNested()
  @Type(() => ServiceCreateNestedManyWithoutBookingsInput)
  @IsOptional()
  @Field(() => ServiceCreateNestedManyWithoutBookingsInput, {
    nullable: true,
  })
  services?: ServiceCreateNestedManyWithoutBookingsInput;

  @ApiProperty({
    required: false,
    type: () => ServiceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ServiceWhereUniqueInput)
  @IsOptional()
  @Field(() => ServiceWhereUniqueInput, {
    nullable: true,
  })
  service?: ServiceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { BookingCreateInput as BookingCreateInput };
