import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AuthKeyTitle } from "../authKey/AuthKeyTitle";

export const PlayerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="uuid" source="uuid" />
        <ReferenceArrayInput
          source="authKeys"
          reference="AuthKey"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AuthKeyTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
