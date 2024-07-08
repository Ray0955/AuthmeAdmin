import { PasswordWhereUniqueInput } from "./PasswordWhereUniqueInput";
import { PasswordUpdateInput } from "./PasswordUpdateInput";

export type UpdatePasswordArgs = {
  where: PasswordWhereUniqueInput;
  data: PasswordUpdateInput;
};
