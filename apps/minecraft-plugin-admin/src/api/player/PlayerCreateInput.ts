import { PasswordCreateNestedManyWithoutPlayersInput } from "./PasswordCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  username?: string | null;
  hasPermission?: boolean | null;
  passwords?: PasswordCreateNestedManyWithoutPlayersInput;
};
