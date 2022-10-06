import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SchemaType } from '../../types';

export const initialState: SchemaType = {
  firstName: {
    required: false,
    minLength: 0,
    maxLength: 0,
  },
  lastName: {
    required: false,
    minLength: 0,
    maxLength: 0,
  },
  mobilePhone: {
    required: false,
    regExp: '',
  },
  password: {
    required: false,
    minLength: 0,
    maxLength: 0,
  },
  email: {
    required: false,
    regExp: '',
  },
  birthday: {
    required: false,
    minAge: 0,
    maxAge: 0,
  },
  ocean: {
    required: false,
    oneOf: [],
  },
  hobby: {
    required: false,
    anyOf: [],
  },
  sex: {
    required: false,
    oneOf: [],
  },
};

export const schemaSlice = createSlice({
  name: 'schemaSlice',
  initialState,
  reducers: {
    setSchemaData: (state, action: PayloadAction<SchemaType>) => action.payload,
  },
});

export const { setSchemaData } = schemaSlice.actions;
