import { SchemaSimpleType } from './SchemaSimpleType';
import { SexType } from './SexType';

export type SchemaSexType = SchemaSimpleType<{ oneOf: SexType[] }>;
