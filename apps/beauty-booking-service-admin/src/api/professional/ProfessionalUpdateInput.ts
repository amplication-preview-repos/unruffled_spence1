import { ReviewUpdateManyWithoutProfessionalsInput } from "./ReviewUpdateManyWithoutProfessionalsInput";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { ServiceUpdateManyWithoutProfessionalsInput } from "./ServiceUpdateManyWithoutProfessionalsInput";

export type ProfessionalUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  experience?: number | null;
  reviews?: ReviewUpdateManyWithoutProfessionalsInput;
  portfolio?: PortfolioWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
  services?: ServiceUpdateManyWithoutProfessionalsInput;
};
