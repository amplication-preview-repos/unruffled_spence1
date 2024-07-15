import { Service } from "../service/Service";
import { User } from "../user/User";

export type Booking = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  datetime: Date | null;
  services?: Array<Service>;
  service?: Service | null;
  user?: User | null;
};
