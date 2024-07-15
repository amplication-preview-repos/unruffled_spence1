import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  datetime?: SortOrder;
  serviceId?: SortOrder;
  userId?: SortOrder;
};
