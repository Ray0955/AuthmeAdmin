import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PasswordTitle } from "../password/PasswordTitle";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <BooleanInput label="hasPermission" source="hasPermission" />
        <ReferenceArrayInput
          source="passwords"
          reference="Password"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PasswordTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
