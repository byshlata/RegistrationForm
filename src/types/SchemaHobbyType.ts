import { HobbyType } from './HobbyType';
import { SchemaSimpleType } from './SchemaSimpleType';

export type SchemaHobbyType = SchemaSimpleType<{ anyOf: HobbyType[] }>;
