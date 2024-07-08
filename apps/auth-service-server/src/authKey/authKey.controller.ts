import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AuthKeyService } from "./authKey.service";
import { AuthKeyControllerBase } from "./base/authKey.controller.base";

@swagger.ApiTags("authKeys")
@common.Controller("authKeys")
export class AuthKeyController extends AuthKeyControllerBase {
  constructor(protected readonly service: AuthKeyService) {
    super(service);
  }
}
