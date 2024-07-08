import { AuthKey } from "../authKey/AuthKey";

export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  uuid: string | null;
  authKeys?: Array<AuthKey>;
};
