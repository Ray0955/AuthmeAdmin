import { AuthKeyCreateNestedManyWithoutPlayersInput } from "./AuthKeyCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  name?: string | null;
  uuid?: string | null;
  authKeys?: AuthKeyCreateNestedManyWithoutPlayersInput;
};
