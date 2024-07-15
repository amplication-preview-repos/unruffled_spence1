import { ProfessionalUpdateManyWithoutServicesInput } from "./ProfessionalUpdateManyWithoutServicesInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BookingUpdateManyWithoutServicesInput } from "./BookingUpdateManyWithoutServicesInput";

export type ServiceUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  professionals?: ProfessionalUpdateManyWithoutServicesInput;
  professional?: ProfessionalWhereUniqueInput | null;
  booking?: BookingWhereUniqueInput | null;
  bookings?: BookingUpdateManyWithoutServicesInput;
};
