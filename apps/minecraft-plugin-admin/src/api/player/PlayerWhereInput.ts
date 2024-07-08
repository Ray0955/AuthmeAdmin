import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { PasswordListRelationFilter } from "../password/PasswordListRelationFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  username?: StringNullableFilter;
  hasPermission?: BooleanNullableFilter;
  passwords?: PasswordListRelationFilter;
};
