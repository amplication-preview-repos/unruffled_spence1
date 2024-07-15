import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";
import { ProfessionalTitle } from "../professional/ProfessionalTitle";

export const PortfolioCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
