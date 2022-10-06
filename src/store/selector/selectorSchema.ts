import { AppRootStore } from 'store';
import {
  SchemaBirthday,
  SchemaHobbyType,
  SchemaOceanType,
  SchemaRegExpType,
  SchemaSexType,
  SchemaTextInputType,
} from 'types';

export const selectorFirstName = (store: AppRootStore): SchemaTextInputType =>
  store.schema.firstName;

export const selectorLastName = (store: AppRootStore): SchemaTextInputType =>
  store.schema.lastName;

export const selectorMobilePhone = (store: AppRootStore): SchemaRegExpType =>
  store.schema.mobilePhone;

export const selectorPassword = (store: AppRootStore): SchemaTextInputType =>
  store.schema.password;

export const selectorEmail = (store: AppRootStore): SchemaRegExpType =>
  store.schema.email;

export const selectorBirthday = (store: AppRootStore): SchemaBirthday =>
  store.schema.birthday;

export const selectorOcean = (store: AppRootStore): SchemaOceanType => store.schema.ocean;

export const selectorHobby = (store: AppRootStore): SchemaHobbyType => store.schema.hobby;

export const selectorSex = (store: AppRootStore): SchemaSexType => store.schema.sex;
