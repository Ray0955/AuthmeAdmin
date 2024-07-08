import * as graphql from "@nestjs/graphql";
import { PasswordResolverBase } from "./base/password.resolver.base";
import { Password } from "./base/Password";
import { PasswordService } from "./password.service";

@graphql.Resolver(() => Password)
export class PasswordResolver extends PasswordResolverBase {
  constructor(protected readonly service: PasswordService) {
    super(service);
  }
}
