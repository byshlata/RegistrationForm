import {
  SchemaBirthday,
  SchemaHobbyType,
  SchemaOceanType,
  SchemaRegExpType,
  SchemaSexType,
  SchemaTextInputType,
} from 'types';

export type SchemaType = {
  firstName: SchemaTextInputType;
  lastName: SchemaTextInputType;
  birthday: SchemaBirthday;
  ocean: SchemaOceanType;
  hobby: SchemaHobbyType;
  sex: SchemaSexType;
  mobilePhone: SchemaRegExpType;
  password: SchemaTextInputType;
  email: SchemaRegExpType;
};
