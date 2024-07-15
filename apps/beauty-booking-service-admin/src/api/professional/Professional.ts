import { Review } from "../review/Review";
import { Portfolio } from "../portfolio/Portfolio";
import { Service } from "../service/Service";

export type Professional = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  experience: number | null;
  reviews?: Array<Review>;
  portfolio?: Portfolio | null;
  service?: Service | null;
  services?: Array<Service>;
};
