import { Module } from "@nestjs/common";
import { PasswordModuleBase } from "./base/password.module.base";
import { PasswordService } from "./password.service";
import { PasswordController } from "./password.controller";
import { PasswordResolver } from "./password.resolver";

@Module({
  imports: [PasswordModuleBase],
  controllers: [PasswordController],
  providers: [PasswordService, PasswordResolver],
  exports: [PasswordService],
})
export class PasswordModule {}
