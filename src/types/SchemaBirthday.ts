import { SchemaSimpleType } from './SchemaSimpleType';

export type SchemaBirthday = SchemaSimpleType<{ minAge: number; maxAge: number }>;
