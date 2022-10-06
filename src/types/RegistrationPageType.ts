import { Path } from 'enums';
import { Nullable } from 'types';

export type RegistrationPageType = Nullable<
  Path.SingUp | Path.PersonalInformation | Path.Profile
>;
