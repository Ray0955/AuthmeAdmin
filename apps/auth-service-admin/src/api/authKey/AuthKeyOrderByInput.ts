import { SortOrder } from "../../util/SortOrder";

export type AuthKeyOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
  key?: SortOrder;
  playerId?: SortOrder;
};
