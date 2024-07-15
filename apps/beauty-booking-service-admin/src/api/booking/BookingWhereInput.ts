import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingWhereInput = {
  id?: StringFilter;
  datetime?: DateTimeNullableFilter;
  services?: ServiceListRelationFilter;
  service?: ServiceWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
