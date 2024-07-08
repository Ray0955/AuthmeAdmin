import { Player } from "../player/Player";

export type AuthKey = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  validUntil: Date | null;
  key: string | null;
  player?: Player | null;
};
