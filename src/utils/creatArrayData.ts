import { toLocateData } from './toLocateData';

import { UndefinedType, UserSliceType } from 'types';

export type userDataType = {
  title: string;
  data: UndefinedType<string>;
};

export const creatArrayData = (value: UserSliceType): userDataType[] => [
  { title: 'First name', data: value.firstName },
  { title: 'Last name', data: value.lastName },
  { title: 'Mobile phone', data: value.mobilePhone },
  { title: 'Email', data: value.email },
  { title: 'Password', data: value.password },
  { title: 'Birthday', data: toLocateData(value.birthday) },
  { title: 'Sex', data: value.sex },
  { title: 'Hobby', data: value.hobby.join(',') },
  { title: 'Ocean', data: value.ocean },
];
