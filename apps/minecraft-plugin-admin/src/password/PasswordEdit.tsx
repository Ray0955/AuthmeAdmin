import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PlayerTitle } from "../player/PlayerTitle";

export const PasswordEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="value" source="value" />
        <ReferenceInput source="player.id" reference="Player" label="player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
