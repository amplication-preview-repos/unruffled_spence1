import { ProfessionalCreateNestedManyWithoutPortfoliosInput } from "./ProfessionalCreateNestedManyWithoutPortfoliosInput";

export type PortfolioCreateInput = {
  images?: Array<"Option1">;
  professionals?: ProfessionalCreateNestedManyWithoutPortfoliosInput;
};
