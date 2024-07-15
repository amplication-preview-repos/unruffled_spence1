import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";
import { ProfessionalTitle } from "../professional/ProfessionalTitle";

export const PortfolioEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="images"
          source="images"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="professionals"
          reference="Professional"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfessionalTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
