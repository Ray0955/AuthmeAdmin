import { AuthKeyUpdateManyWithoutPlayersInput } from "./AuthKeyUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  name?: string | null;
  uuid?: string | null;
  authKeys?: AuthKeyUpdateManyWithoutPlayersInput;
};
