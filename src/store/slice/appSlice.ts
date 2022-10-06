import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppSliceType, RegistrationPageType } from '../../types';

export const initialState: AppSliceType = {
  registrationPage: null,
};

export const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setRegistrationPage: (state, action: PayloadAction<RegistrationPageType>) => {
      state.registrationPage = action.payload;
    },
  },
});

export const { setRegistrationPage } = appSlice.actions;
