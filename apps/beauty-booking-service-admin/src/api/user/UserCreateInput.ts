import { InputJsonValue } from "../../types";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";
import { BookingCreateNestedManyWithoutUsersInput } from "./BookingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
  bookings?: BookingCreateNestedManyWithoutUsersInput;
};
