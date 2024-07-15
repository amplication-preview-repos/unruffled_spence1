import { Professional } from "../professional/Professional";
import { Booking } from "../booking/Booking";

export type Service = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  professionals?: Array<Professional>;
  professional?: Professional | null;
  booking?: Booking | null;
  bookings?: Array<Booking>;
};
