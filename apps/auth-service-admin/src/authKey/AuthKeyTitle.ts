import { AuthKey as TAuthKey } from "../api/authKey/AuthKey";

export const AUTHKEY_TITLE_FIELD = "key";

export const AuthKeyTitle = (record: TAuthKey): string => {
  return record.key?.toString() || String(record.id);
};
