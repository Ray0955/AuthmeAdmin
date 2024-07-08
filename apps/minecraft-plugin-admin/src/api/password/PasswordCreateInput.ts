import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PasswordCreateInput = {
  value?: string | null;
  player?: PlayerWhereUniqueInput | null;
};
