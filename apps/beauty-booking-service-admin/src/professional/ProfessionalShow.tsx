import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PROFESSIONAL_TITLE_FIELD } from "./ProfessionalTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { BOOKING_TITLE_FIELD } from "../booking/BookingTitle";
import { PORTFOLIO_TITLE_FIELD } from "../portfolio/PortfolioTitle";
import { SERVICE_TITLE_FIELD } from "../service/ServiceTitle";

export const ProfessionalShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="firstName" source="firstName" />
        <TextField label="lastName" source="lastName" />
        <TextField label="experience" source="experience" />
        <ReferenceField
          label="Portfolio"
          source="portfolio.id"
          reference="Portfolio"
        >
          <TextField source={PORTFOLIO_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Service" source="service.id" reference="Service">
          <TextField source={SERVICE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Review"
          target="professionalId"
          label="Reviews"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="comment" source="comment" />
            <TextField label="rating" source="rating" />
            <ReferenceField
              label="Professional"
              source="professional.id"
              reference="Professional"
            >
              <TextField source={PROFESSIONAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Service"
          target="professionalId"
          label="Services"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="name" source="name" />
            <TextField label="description" source="description" />
            <TextField label="price" source="price" />
            <ReferenceField
              label="Professional"
              source="professional.id"
              reference="Professional"
            >
              <TextField source={PROFESSIONAL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Booking"
              source="booking.id"
              reference="Booking"
            >
              <TextField source={BOOKING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
