import { Path } from '../../../enums';
import { RegistrationPageType } from '../../../types';
import { store } from '../../store';
import { setRegistrationPage } from '../appSlice';

describe('AppSlice', () => {
  const { dispatch } = store;
  let currentPage: RegistrationPageType;
  const singUp = Path.SingUp;
  const personalInformation = Path.PersonalInformation;
  const profile = Path.Profile;

  test('page path should be changed', () => {
    dispatch(setRegistrationPage(singUp));
    currentPage = store.getState().app.registrationPage;
    expect(currentPage).toBe(Path.SingUp);

    dispatch(setRegistrationPage(personalInformation));
    currentPage = store.getState().app.registrationPage;
    expect(currentPage).toBe(Path.PersonalInformation);

    dispatch(setRegistrationPage(profile));
    currentPage = store.getState().app.registrationPage;
    expect(currentPage).toBe(Path.Profile);
  });
});
