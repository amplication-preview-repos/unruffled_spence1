import { Professional } from "../professional/Professional";
import { User } from "../user/User";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comment: string | null;
  rating: number | null;
  professional?: Professional | null;
  user?: User | null;
};
