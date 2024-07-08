import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AuthKeyUpdateInput = {
  validUntil?: Date | null;
  key?: string | null;
  player?: PlayerWhereUniqueInput | null;
};
