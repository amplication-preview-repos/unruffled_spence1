import { ProfessionalWhereUniqueInput } from "../professional/ProfessionalWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  professional?: ProfessionalWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
