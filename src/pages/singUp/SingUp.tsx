import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';
// @ts-ignore
import InputMask from 'react-input-mask';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import styles from './SingUp.module.sass';

import { CustomButton, CustomInput, Form, Title } from 'components';
import { Path } from 'enums';
import { useAppDispatch } from 'hooks';
import {
  selectorEmail,
  selectorMobilePhone,
  selectorPassword,
  selectorUserEmail,
  selectorUserMobilePhone,
  selectorUserPassword,
  setRegistrationPage,
  setSingUpData,
} from 'store';
import { createSingUpSchema } from 'utils';

export const SingUp = (): ReactElement => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const mobilePhoneSchemaData = useSelector(selectorMobilePhone);
  const emailSchemaData = useSelector(selectorEmail);
  const passwordSchemaData = useSelector(selectorPassword);
  const userMobilePhone = useSelector(selectorUserMobilePhone);
  const userEmail = useSelector(selectorUserEmail);
  const userPassword = useSelector(selectorUserPassword);

  useEffect(() => {
    dispatch(setRegistrationPage(Path.SingUp));
  }, []);

  const onNavigatePersonalInformationPage = (): void => {
    navigate(`${Path.Registration}${Path.PersonalInformation}`);
  };

  const singUpSchema = yup.object().shape(
    createSingUpSchema({
      passwordMaxLength: passwordSchemaData.maxLength,
      passwordMinLength: passwordSchemaData.minLength,
      phoneRegExpString: mobilePhoneSchemaData.regExp,
      emailRegExpString: emailSchemaData.regExp,
    }),
  );

  const formik = useFormik({
    initialValues: {
      mobilePhone: userMobilePhone,
      email: userEmail,
      password: userPassword,
      repeatPassword: userPassword,
    },
    validationSchema: singUpSchema,
    onSubmit: values => {
      dispatch(
        setSingUpData({
          mobilePhone: values.mobilePhone,
          email: values.email,
          password: values.password,
        }),
      );
      onNavigatePersonalInformationPage();
    },
  });

  const errorMobilePhone = formik.touched.mobilePhone
    ? formik.errors.mobilePhone
    : undefined;
  const errorEmail = formik.touched.email ? formik.errors.email : undefined;
  const errorPassword = formik.touched.password ? formik.errors.password : undefined;
  const errorRepeatPassword = formik.touched.repeatPassword
    ? formik.errors.repeatPassword
    : undefined;

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Form>
        <Title text="Registration data" />
        <InputMask
          mask="+375999999999"
          maskChar=""
          value={formik.values.mobilePhone}
          onChange={formik.handleChange}
          alwaysShowMask
        >
          {(inputProps: any) => (
            <CustomInput
              type="tel"
              name="mobilePhone"
              error={errorMobilePhone}
              {...inputProps}
            />
          )}
        </InputMask>
        <input type="hidden" name="email" />
        <CustomInput
          type="simple"
          name="email"
          autoComplete="on"
          error={errorEmail}
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <CustomInput
          type="password"
          error={errorPassword}
          value={formik.values.password}
          onChange={formik.handleChange}
          name="password"
          autoComplete="on"
        />
        <CustomInput
          type="password"
          error={errorRepeatPassword}
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          name="repeatPassword"
          autoComplete="on"
        />
        <div className={styles.buttonWrapper}>
          <CustomButton type="submit" color="primary">
            Next
          </CustomButton>
        </div>
      </Form>
    </form>
  );
};
