import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PasswordTitle } from "../password/PasswordTitle";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
