import { ProfessionalCreateNestedManyWithoutServicesInput } from "./ProfessionalCreateNestedManyWithoutServicesInput";
import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { BookingWhereUniqueInput } from "../booking/BookingWhereUniqueInput";
import { BookingCreateNestedManyWithoutServicesInput } from "./BookingCreateNestedManyWithoutServicesInput";

export type ServiceCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  professionals?: ProfessionalCreateNestedManyWithoutServicesInput;
  professional?: ProfessionalWhereUniqueInput | null;
  booking?: BookingWhereUniqueInput | null;
  bookings?: BookingCreateNestedManyWithoutServicesInput;
};
