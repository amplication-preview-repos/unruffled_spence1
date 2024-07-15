import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  reviews?: ReviewListRelationFilter;
  bookings?: BookingListRelationFilter;
};
