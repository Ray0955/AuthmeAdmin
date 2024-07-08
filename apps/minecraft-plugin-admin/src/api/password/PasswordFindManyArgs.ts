import { PasswordWhereInput } from "./PasswordWhereInput";
import { PasswordOrderByInput } from "./PasswordOrderByInput";

export type PasswordFindManyArgs = {
  where?: PasswordWhereInput;
  orderBy?: Array<PasswordOrderByInput>;
  skip?: number;
  take?: number;
};
