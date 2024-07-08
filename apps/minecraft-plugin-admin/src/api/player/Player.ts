import { Password } from "../password/Password";

export type Player = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  hasPermission: boolean | null;
  passwords?: Array<Password>;
};
