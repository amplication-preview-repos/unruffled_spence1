import { StringFilter } from "../../util/StringFilter";
import { ProfessionalListRelationFilter } from "../professional/ProfessionalListRelationFilter";

export type PortfolioWhereInput = {
  id?: StringFilter;
  professionals?: ProfessionalListRelationFilter;
};
