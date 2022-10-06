import { AppRootStore } from 'store';
import { RegistrationPageType } from 'types';

export const selectorRegistrationPage = (store: AppRootStore): RegistrationPageType =>
  store.app.registrationPage;
