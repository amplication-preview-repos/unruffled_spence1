import { Professional } from "../professional/Professional";

export type Portfolio = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  images?: Array<"Option1">;
  professionals?: Array<Professional>;
};
