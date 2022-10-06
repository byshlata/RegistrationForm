import { UndefinedType } from './UndefinedType';

import { HobbyType } from 'types/HobbyType';
import { OceanType } from 'types/OceanType';
import { SexType } from 'types/SexType';

export type PersonalInformationSubmitType = {
  firstName: string;
  lastName: string;
  birthday: string;
  ocean: UndefinedType<OceanType>;
  hobby: HobbyType[];
  sex: UndefinedType<SexType>;
};
