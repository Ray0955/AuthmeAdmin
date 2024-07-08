import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PasswordService } from "./password.service";
import { PasswordControllerBase } from "./base/password.controller.base";

@swagger.ApiTags("passwords")
@common.Controller("passwords")
export class PasswordController extends PasswordControllerBase {
  constructor(protected readonly service: PasswordService) {
    super(service);
  }
}
