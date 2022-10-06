import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  PersonalInformationSubmitType,
  SingUpSubmitType,
  UserSliceType,
} from '../../types';

export const initialState: UserSliceType = {
  mobilePhone: '',
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  birthday: '',
  ocean: undefined,
  hobby: [],
  sex: undefined,
};

export const userDataSlice = createSlice({
  name: 'userDataSlice',
  initialState,
  reducers: {
    setSingUpData: (state, action: PayloadAction<SingUpSubmitType>) => ({
      ...state,
      ...action.payload,
    }),
    setPersonalInformationData: (
      state,
      action: PayloadAction<PersonalInformationSubmitType>,
    ) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setSingUpData, setPersonalInformationData } = userDataSlice.actions;
