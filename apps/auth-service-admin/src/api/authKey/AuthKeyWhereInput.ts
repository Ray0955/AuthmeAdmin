import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type AuthKeyWhereInput = {
  id?: StringFilter;
  validUntil?: DateTimeNullableFilter;
  key?: StringNullableFilter;
  player?: PlayerWhereUniqueInput;
};
