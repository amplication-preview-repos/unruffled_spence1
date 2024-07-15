import { ServiceCreateNestedManyWithoutBookingsInput } from "./ServiceCreateNestedManyWithoutBookingsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingCreateInput = {
  datetime?: Date | null;
  services?: ServiceCreateNestedManyWithoutBookingsInput;
  service?: ServiceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
