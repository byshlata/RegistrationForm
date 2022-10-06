import { configureStore } from '@reduxjs/toolkit';

import { schemaSlice, appSlice, userDataSlice } from 'store';

export const store = configureStore({
  reducer: {
    schema: schemaSlice.reducer,
    app: appSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
