import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PasswordServiceBase } from "./base/password.service.base";

@Injectable()
export class PasswordService extends PasswordServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
