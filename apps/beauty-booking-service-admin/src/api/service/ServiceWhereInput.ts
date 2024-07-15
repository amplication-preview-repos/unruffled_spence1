import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProfessionalListRelationFilter } from "../professional/ProfessionalListRelationFilter";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type ServiceWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  professionals?: ProfessionalListRelationFilter;
  professional?: ProfessionalWhereUniqueInput;
  booking?: BookingWhereUniqueInput;
  bookings?: BookingListRelationFilter;
};
