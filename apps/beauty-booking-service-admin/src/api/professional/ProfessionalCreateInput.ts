import { ReviewCreateNestedManyWithoutProfessionalsInput } from "./ReviewCreateNestedManyWithoutProfessionalsInput";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { ServiceCreateNestedManyWithoutProfessionalsInput } from "./ServiceCreateNestedManyWithoutProfessionalsInput";

export type ProfessionalCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  experience?: number | null;
  reviews?: ReviewCreateNestedManyWithoutProfessionalsInput;
  portfolio?: PortfolioWhereUniqueInput | null;
  service?: ServiceWhereUniqueInput | null;
  services?: ServiceCreateNestedManyWithoutProfessionalsInput;
};
