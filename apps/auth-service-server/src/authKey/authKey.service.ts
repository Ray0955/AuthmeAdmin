import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AuthKeyServiceBase } from "./base/authKey.service.base";

@Injectable()
export class AuthKeyService extends AuthKeyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
