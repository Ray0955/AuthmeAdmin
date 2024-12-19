import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AuthKeyTitle } from "../authKey/AuthKeyTitle";

export const PlayerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
