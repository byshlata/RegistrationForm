import * as yup from 'yup';
import { OptionalArraySchema } from 'yup/lib/array';
import { AnyObject } from 'yup/lib/object';
import { RequiredStringSchema } from 'yup/lib/string';

import { ErrorMessage } from 'enums';
import { countAge } from 'utils/countAge';

type SchemaPersonalInformationType = {
  firstName: RequiredStringSchema<string | undefined, AnyObject>;
  lastName: RequiredStringSchema<string | undefined, AnyObject>;
  sex: RequiredStringSchema<string | undefined, AnyObject>;
  birthday: RequiredStringSchema<string | undefined, AnyObject>;
  ocean: RequiredStringSchema<string | undefined, AnyObject>;
  hobby: OptionalArraySchema<yup.AnySchema<any, any, any>, AnyObject, any[] | undefined>;
};

type CreateSingUpSchemaType = {
  birthdayMinAge: number;
  birthdayMaxAge: number;
  firstNameMinLength: number;
  firstNameMaxLength: number;
  lastNameMinLength: number;
  lastNameMaxLength: number;
};

export const createPersonalInformationSchema = ({
  birthdayMinAge,
  birthdayMaxAge,
  lastNameMinLength,
  lastNameMaxLength,
  firstNameMaxLength,
  firstNameMinLength,
}: CreateSingUpSchemaType): SchemaPersonalInformationType => ({
  firstName: yup
    .string()
    .min(firstNameMinLength, ErrorMessage.ToShort)
    .max(firstNameMaxLength, ErrorMessage.ToLong)
    .required(ErrorMessage.Required),
  lastName: yup
    .string()
    .min(lastNameMinLength, ErrorMessage.ToShort)
    .max(lastNameMaxLength, ErrorMessage.ToLong)
    .required(ErrorMessage.Required),
  sex: yup.string().required(ErrorMessage.Required),
  birthday: yup
    .string()
    .required(ErrorMessage.Required)
    .test('birthday', (value, { createError, path }) => {
      if (value) {
        const userAge = countAge(value);
        if (userAge > birthdayMinAge && userAge < birthdayMaxAge) {
          return true;
        }
        return createError({
          path,
          message: ErrorMessage.Birthday,
        });
      }
      return createError({
        path,
        message: ErrorMessage.Birthday,
      });
    }),
  ocean: yup.string().required(ErrorMessage.Required),
  hobby: yup.array().test('hobby', (value, { createError, path, parent }) => {
    if (parent.hobby.length) {
      return true;
    }
    return createError({
      path,
      message: ErrorMessage.Hobby,
    });
  }),
});
