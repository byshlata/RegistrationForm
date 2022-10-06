import * as yup from 'yup';
import { AnyObject } from 'yup/lib/object';
import { RequiredStringSchema } from 'yup/lib/string';

import { ErrorMessage } from 'enums';
import { createRegExp } from 'utils';

type SchemaSingUpType = {
  mobilePhone: RequiredStringSchema<string | undefined, AnyObject>;
  email: yup.StringSchema<string | undefined, AnyObject, string | undefined>;
  password: RequiredStringSchema<string | undefined, AnyObject>;
  repeatPassword: RequiredStringSchema<string | undefined, AnyObject>;
};

type CreateSingUpSchemaType = {
  phoneRegExpString: string;
  emailRegExpString: string;
  passwordMinLength: number;
  passwordMaxLength: number;
};

export const createSingUpSchema = ({
  phoneRegExpString,
  emailRegExpString,
  passwordMinLength,
  passwordMaxLength,
}: CreateSingUpSchemaType): SchemaSingUpType => ({
  mobilePhone: yup
    .string()
    .matches(createRegExp(phoneRegExpString), ErrorMessage.Phone)
    .required(),
  email: yup.string().matches(createRegExp(emailRegExpString), ErrorMessage.Email),
  password: yup
    .string()
    .min(passwordMinLength, ErrorMessage.ToShort)
    .max(passwordMaxLength, ErrorMessage.ToLong)
    .required(ErrorMessage.Required),
  repeatPassword: yup
    .string()
    .min(passwordMinLength, ErrorMessage.ToShort)
    .max(passwordMaxLength, ErrorMessage.ToLong)
    .required(ErrorMessage.Required)
    .test('repeatPassword', (value, { createError, path, parent }) =>
      parent.password === value
        ? true
        : createError({
            path,
            message: ErrorMessage.RepeatPassword,
          }),
    ),
});
