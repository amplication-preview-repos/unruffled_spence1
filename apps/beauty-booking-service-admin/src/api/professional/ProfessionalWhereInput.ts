import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";
import { ServiceWhereUniqueInput } from "../service/ServiceWhereUniqueInput";
import { ServiceListRelationFilter } from "../service/ServiceListRelationFilter";

export type ProfessionalWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  experience?: IntNullableFilter;
  reviews?: ReviewListRelationFilter;
  portfolio?: PortfolioWhereUniqueInput;
  service?: ServiceWhereUniqueInput;
  services?: ServiceListRelationFilter;
};
