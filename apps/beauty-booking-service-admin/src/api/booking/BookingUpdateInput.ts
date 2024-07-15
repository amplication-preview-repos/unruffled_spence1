import { ServiceUpdateManyWithoutBookingsInput } from "./ServiceUpdateManyWithoutBookingsInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type BookingUpdateInput = {
  datetime?: Date | null;
  services?: ServiceUpdateManyWithoutBookingsInput;
  service?: ServiceWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
