import { Player } from "../player/Player";

export type Password = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  value: string | null;
  player?: Player | null;
};
