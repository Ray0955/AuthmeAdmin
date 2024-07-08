import { PasswordUpdateManyWithoutPlayersInput } from "./PasswordUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  username?: string | null;
  hasPermission?: boolean | null;
  passwords?: PasswordUpdateManyWithoutPlayersInput;
};
