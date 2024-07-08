import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AuthKeyListRelationFilter } from "../authKey/AuthKeyListRelationFilter";

export type PlayerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  uuid?: StringNullableFilter;
  authKeys?: AuthKeyListRelationFilter;
};
