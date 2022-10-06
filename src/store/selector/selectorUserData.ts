import { AppRootStore } from 'store';
import { HobbyType, OceanType, SexType, UndefinedType } from 'types';

export const selectorUserMobilePhone = (store: AppRootStore): string =>
  store.userData.mobilePhone;

export const selectorUserEmail = (store: AppRootStore): string => store.userData.email;

export const selectorUserPassword = (store: AppRootStore): string =>
  store.userData.password;

export const selectorUserFistName = (store: AppRootStore): string =>
  store.userData.firstName;

export const selectorUserLastName = (store: AppRootStore): string =>
  store.userData.lastName;

export const selectorUserBirthday = (store: AppRootStore): string =>
  store.userData.birthday;

export const selectorUserFavoriteOcean = (
  store: AppRootStore,
): UndefinedType<OceanType> => store.userData.ocean;

export const selectorUserHobby = (store: AppRootStore): HobbyType[] =>
  store.userData.hobby;

export const selectorUserSex = (store: AppRootStore): UndefinedType<SexType> =>
  store.userData.sex;
