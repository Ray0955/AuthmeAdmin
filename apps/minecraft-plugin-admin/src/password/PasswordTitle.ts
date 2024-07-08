import { Password as TPassword } from "../api/password/Password";

export const PASSWORD_TITLE_FIELD = "value";

export const PasswordTitle = (record: TPassword): string => {
  return record.value?.toString() || String(record.id);
};
