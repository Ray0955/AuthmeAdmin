import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PasswordUpdateInput = {
  value?: string | null;
  player?: PlayerWhereUniqueInput | null;
};
