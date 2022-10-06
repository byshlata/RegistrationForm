import React, { ReactElement, useEffect } from 'react';

import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import styles from './PersonalInformation.module.sass';

import {
  Box,
  CustomButton,
  CustomChecked,
  CustomInput,
  CustomRadio,
  CustomSelect,
  Form,
  Title,
} from 'components';
import { Path } from 'enums';
import { useAppDispatch } from 'hooks';
import {
  selectorBirthday,
  selectorFirstName,
  selectorHobby,
  selectorLastName,
  selectorOcean,
  selectorSex,
  selectorUserBirthday,
  selectorUserFavoriteOcean,
  selectorUserFistName,
  selectorUserHobby,
  selectorUserLastName,
  selectorUserMobilePhone,
  selectorUserSex,
  setPersonalInformationData,
  setRegistrationPage,
} from 'store';
import { createPersonalInformationSchema } from 'utils';

export const PersonalInformation = (): ReactElement => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const oceanSchemaData = useSelector(selectorOcean);
  const birthdaySchemaData = useSelector(selectorBirthday);
  const sexSchemaData = useSelector(selectorSex);
  const hobbySchemaData = useSelector(selectorHobby);
  const firstNameSchemaData = useSelector(selectorFirstName);
  const lastNameSchemaData = useSelector(selectorLastName);
  const userMobilePhone = useSelector(selectorUserMobilePhone);
  const userFirstName = useSelector(selectorUserFistName);
  const userLastName = useSelector(selectorUserLastName);
  const userSex = useSelector(selectorUserSex);
  const userBirthday = useSelector(selectorUserBirthday);
  const userFavoriteOcean = useSelector(selectorUserFavoriteOcean);
  const userHobby = useSelector(selectorUserHobby);

  const personalInformationSchema = Yup.object().shape(
    createPersonalInformationSchema({
      birthdayMinAge: birthdaySchemaData.minAge,
      birthdayMaxAge: birthdaySchemaData.maxAge,
      firstNameMaxLength: firstNameSchemaData.maxLength,
      firstNameMinLength: firstNameSchemaData.minLength,
      lastNameMaxLength: lastNameSchemaData.maxLength,
      lastNameMinLength: lastNameSchemaData.minLength,
    }),
  );

  useEffect(() => {
    if (!userMobilePhone) {
      navigate(`${Path.Registration}${Path.SingUp}`);
    }
  }, []);

  useEffect(() => {
    dispatch(setRegistrationPage(Path.PersonalInformation));
  }, []);

  const onSingUpPage = (): void => {
    navigate(`${Path.Registration}${Path.SingUp}`);
  };

  const onFinishRegistration = (): void => {
    navigate(`${Path.Profile}`);
  };

  const formik = useFormik({
    initialValues: {
      firstName: userFirstName,
      lastName: userLastName,
      sex: userSex,
      birthday: userBirthday,
      ocean: userFavoriteOcean,
      hobby: userHobby,
    },
    validationSchema: personalInformationSchema,
    onSubmit: values => {
      dispatch(
        setPersonalInformationData({
          firstName: values.firstName,
          lastName: values.lastName,
          sex: values.sex,
          birthday: values.birthday,
          ocean: values.ocean,
          hobby: values.hobby,
        }),
      );
      onFinishRegistration();
    },
  });

  const errorFirstName = formik.touched.firstName ? formik.errors.firstName : undefined;
  const errorLastName = formik.touched.lastName ? formik.errors.lastName : undefined;
  const errorSex = formik.touched.sex ? formik.errors.sex : undefined;
  const errorBirthday = formik.touched.birthday ? formik.errors.birthday : undefined;
  const errorOcean = formik.touched.ocean ? formik.errors.ocean : undefined;
  const errorHobby = formik.touched.hobby ? formik.errors.hobby?.toString() : undefined;

  return (
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      <Form>
        <Title text="Personal information" />
        <CustomInput
          type="simple"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          name="firstName"
          error={errorFirstName}
        />
        <CustomInput
          type="simple"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          name="lastName"
          error={errorLastName}
        />
        <CustomInput
          type="date"
          value={formik.values.birthday}
          onChange={formik.handleChange}
          name="birthday"
          error={errorBirthday}
        />
        <Box label="Sex" error={errorSex}>
          <CustomRadio
            name="sex"
            options={sexSchemaData.oneOf}
            onChange={formik.handleChange}
            value={formik.values.sex}
          />
        </Box>
        <Box label="Hobby" error={errorHobby}>
          <CustomChecked
            options={hobbySchemaData.anyOf}
            checkedElement={formik.values.hobby}
            onChange={formik.setFieldValue}
            tags="hobby"
          />
        </Box>
        <CustomSelect
          error={errorOcean}
          options={oceanSchemaData.oneOf}
          value={formik.values.ocean || ''}
          name="ocean"
          onChange={formik.handleChange}
        />
        <div className={styles.buttonBlock}>
          <div className={styles.buttonWrapper}>
            <CustomButton color="secondary" onClick={onSingUpPage}>
              Back
            </CustomButton>
          </div>
          <div className={styles.buttonWrapper}>
            <CustomButton type="submit" color="primary">
              Next
            </CustomButton>
          </div>
        </div>
      </Form>
    </form>
  );
};
