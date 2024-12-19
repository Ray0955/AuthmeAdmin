import { Module } from "@nestjs/common";
import { AuthKeyModuleBase } from "./base/authKey.module.base";
import { AuthKeyService } from "./authKey.service";
import { AuthKeyController } from "./authKey.controller";
import { AuthKeyResolver } from "./authKey.resolver";

@Module({
  imports: [AuthKeyModuleBase],
  controllers: [AuthKeyController],
  providers: [AuthKeyService, AuthKeyResolver],
  exports: [AuthKeyService],
})
export class AuthKeyModule {}
