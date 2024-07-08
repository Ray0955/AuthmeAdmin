import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type PasswordWhereInput = {
  id?: StringFilter;
  value?: StringNullableFilter;
  player?: PlayerWhereUniqueInput;
};
