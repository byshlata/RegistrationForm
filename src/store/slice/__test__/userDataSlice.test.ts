import { PersonalInformationSubmitType, SingUpSubmitType } from '../../../types';
import { store } from '../../store';
import { setPersonalInformationData, setSingUpData } from '../userDataSlice';

describe('schemaSlice', () => {
  const { dispatch } = store;

  const singUpUserData: SingUpSubmitType = {
    mobilePhone: '+375292642799',
    password: '123123',
    email: '123123',
  };

  const personalInformation: PersonalInformationSubmitType = {
    firstName: 'Aliaksandr',
    lastName: 'Rudnitski',
    birthday: '01.06.1988',
    ocean: 'Indian',
    hobby: ['Beauty', 'Pets'],
    sex: 'other',
  };

  test('data user sing up form should be set', () => {
    dispatch(setSingUpData(singUpUserData));

    const { email } = store.getState().userData;
    const phone = store.getState().userData.mobilePhone;
    const { password } = store.getState().userData;

    expect(email).toBe(singUpUserData.email);
    expect(phone).toBe(singUpUserData.mobilePhone);
    expect(password).toBe(singUpUserData.password);
  });

  test('data user personal information form should be set', () => {
    dispatch(setPersonalInformationData(personalInformation));

    const { firstName } = store.getState().userData;
    const { lastName } = store.getState().userData;
    const { birthday } = store.getState().userData;
    const { ocean } = store.getState().userData;
    const { hobby } = store.getState().userData;
    const { sex } = store.getState().userData;

    expect(firstName).toBe(personalInformation.firstName);
    expect(lastName).toBe(personalInformation.lastName);
    expect(birthday).toBe(personalInformation.birthday);
    expect(ocean).toBe(personalInformation.ocean);
    expect(hobby).toBe(personalInformation.hobby);
    expect(sex).toBe(personalInformation.sex);
  });
});
