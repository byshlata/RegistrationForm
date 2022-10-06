export type { AppDispatchType, AppRootStore } from './store';

export { setSchemaData, schemaSlice } from './slice/schemaSlice';

export { setRegistrationPage, appSlice } from './slice/appSlice';

export {
  setSingUpData,
  setPersonalInformationData,
  userDataSlice,
} from 'store/slice/userDataSlice';

export {
  selectorBirthday,
  selectorFirstName,
  selectorLastName,
  selectorHobby,
  selectorEmail,
  selectorMobilePhone,
  selectorOcean,
  selectorPassword,
  selectorSex,
} from './selector/selectorSchema';

export {
  selectorUserBirthday,
  selectorUserEmail,
  selectorUserHobby,
  selectorUserFavoriteOcean,
  selectorUserFistName,
  selectorUserLastName,
  selectorUserSex,
  selectorUserMobilePhone,
  selectorUserPassword,
} from './selector/selectorUserData';

export { selectorRegistrationPage } from './selector/selectorApp';
