/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Professional as PrismaProfessional,
  Review as PrismaReview,
  Service as PrismaService,
  Portfolio as PrismaPortfolio,
} from "@prisma/client";

export class ProfessionalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ProfessionalCountArgs, "select">
  ): Promise<number> {
    return this.prisma.professional.count(args);
  }

  async professionals(
    args: Prisma.ProfessionalFindManyArgs
  ): Promise<PrismaProfessional[]> {
    return this.prisma.professional.findMany(args);
  }
  async professional(
    args: Prisma.ProfessionalFindUniqueArgs
  ): Promise<PrismaProfessional | null> {
    return this.prisma.professional.findUnique(args);
  }
  async createProfessional(
    args: Prisma.ProfessionalCreateArgs
  ): Promise<PrismaProfessional> {
    return this.prisma.professional.create(args);
  }
  async updateProfessional(
    args: Prisma.ProfessionalUpdateArgs
  ): Promise<PrismaProfessional> {
    return this.prisma.professional.update(args);
  }
  async deleteProfessional(
    args: Prisma.ProfessionalDeleteArgs
  ): Promise<PrismaProfessional> {
    return this.prisma.professional.delete(args);
  }

  async findReviews(
    parentId: string,
    args: Prisma.ReviewFindManyArgs
  ): Promise<PrismaReview[]> {
    return this.prisma.professional
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .reviews(args);
  }

  async findServices(
    parentId: string,
    args: Prisma.ServiceFindManyArgs
  ): Promise<PrismaService[]> {
    return this.prisma.professional
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .services(args);
  }

  async getPortfolio(parentId: string): Promise<PrismaPortfolio | null> {
    return this.prisma.professional
      .findUnique({
        where: { id: parentId },
      })
      .portfolio();
  }

  async getService(parentId: string): Promise<PrismaService | null> {
    return this.prisma.professional
      .findUnique({
        where: { id: parentId },
      })
      .service();
  }
}
