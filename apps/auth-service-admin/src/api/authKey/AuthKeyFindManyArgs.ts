import { AuthKeyWhereInput } from "./AuthKeyWhereInput";
import { AuthKeyOrderByInput } from "./AuthKeyOrderByInput";

export type AuthKeyFindManyArgs = {
  where?: AuthKeyWhereInput;
  orderBy?: Array<AuthKeyOrderByInput>;
  skip?: number;
  take?: number;
};
