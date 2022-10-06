import schemaData from '../../../data/schema.json';
import { SchemaType } from '../../../types';
import { store } from '../../store';
import { setSchemaData } from '../schemaSlice';

describe('schemaSlice', () => {
  const { dispatch } = store;

  const schema = schemaData as SchemaType;

  test('schema should be download', () => {
    dispatch(setSchemaData(schema));
    const schemaState = store.getState().schema;
    expect(schemaState).toEqual(schema);
  });
});
