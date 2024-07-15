import { SortOrder } from "../../util/SortOrder";

export type ProfessionalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  experience?: SortOrder;
  portfolioId?: SortOrder;
  serviceId?: SortOrder;
};
