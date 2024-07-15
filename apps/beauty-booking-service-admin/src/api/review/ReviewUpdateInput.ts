import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  comment?: string | null;
  rating?: number | null;
  professional?: ProfessionalWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
