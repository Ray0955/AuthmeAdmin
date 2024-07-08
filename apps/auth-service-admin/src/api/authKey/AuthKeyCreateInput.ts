import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AuthKeyCreateInput = {
  validUntil?: Date | null;
  key?: string | null;
  player?: PlayerWhereUniqueInput | null;
};
