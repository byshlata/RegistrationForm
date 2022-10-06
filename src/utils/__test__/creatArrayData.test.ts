import { UserSliceType } from '../../types';
import { creatArrayData, userDataType } from '../creatArrayData';

describe('creatArrayData', () => {
  const userData: UserSliceType = {
    mobilePhone: '+375292642799',
    password: '123123',
    email: '123123',
    firstName: 'Aliaksandr',
    lastName: 'Rudnitski',
    birthday: '06.01.1988',
    ocean: 'Indian',
    hobby: ['Beauty', 'Pets'],
    sex: 'other',
  };

  const arrayUserDataCorrect: userDataType[] = [
    { title: 'First name', data: 'Aliaksandr' },
    { title: 'Last name', data: 'Rudnitski' },
    { title: 'Mobile phone', data: '+375292642799' },
    { title: 'Email', data: '123123' },
    { title: 'Password', data: '123123' },
    { title: 'Birthday', data: '01.06.1988' },
    { title: 'Sex', data: 'other' },
    { title: 'Hobby', data: 'Beauty,Pets' },
    { title: 'Ocean', data: 'Indian' },
  ];

  test('array user data should be created', () => {
    const arrayUserData = creatArrayData(userData);

    expect(arrayUserData).toEqual(arrayUserDataCorrect);
  });
});
