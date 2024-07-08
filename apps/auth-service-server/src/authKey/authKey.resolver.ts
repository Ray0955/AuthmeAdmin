import * as graphql from "@nestjs/graphql";
import { AuthKeyResolverBase } from "./base/authKey.resolver.base";
import { AuthKey } from "./base/AuthKey";
import { AuthKeyService } from "./authKey.service";

@graphql.Resolver(() => AuthKey)
export class AuthKeyResolver extends AuthKeyResolverBase {
  constructor(protected readonly service: AuthKeyService) {
    super(service);
  }
}
