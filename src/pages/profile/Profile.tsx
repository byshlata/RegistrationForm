import React, { ReactElement, useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Profile.module.sass';

import { Box, CustomButton, Modal, Title } from 'components';
import { useModal } from 'components/modal/hooks/useModal';
import { Path } from 'enums';
import { useAppDispatch } from 'hooks';
import {
  selectorUserBirthday,
  selectorUserEmail,
  selectorUserFavoriteOcean,
  selectorUserFistName,
  selectorUserHobby,
  selectorUserLastName,
  selectorUserMobilePhone,
  selectorUserPassword,
  selectorUserSex,
  setRegistrationPage,
} from 'store';
import { creatArrayData } from 'utils';

const DALEY = 1000;

export const Profile = (): ReactElement => {
  const dispatch = useAppDispatch();

  const userMobilePhone = useSelector(selectorUserMobilePhone);
  const userEmail = useSelector(selectorUserEmail);
  const userPassword = useSelector(selectorUserPassword);
  const userFirstName = useSelector(selectorUserFistName);
  const userLastName = useSelector(selectorUserLastName);
  const userSex = useSelector(selectorUserSex);
  const userBirthday = useSelector(selectorUserBirthday);
  const userFavoriteOcean = useSelector(selectorUserFavoriteOcean);
  const userHobby = useSelector(selectorUserHobby);

  const navigate = useNavigate();

  const [isOpenModal, onOpenModal, onCloseModal] = useModal();

  useEffect(() => {
    dispatch(setRegistrationPage(Path.Profile));
  }, []);

  useEffect(() => {
    if (!userFirstName) {
      navigate(`${Path.Registration}${Path.SingUp}`);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onOpenModal();
    }, DALEY);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const userData = creatArrayData({
    firstName: userFirstName,
    lastName: userLastName,
    mobilePhone: userMobilePhone,
    email: userEmail,
    password: userPassword,
    birthday: userBirthday,
    hobby: userHobby,
    sex: userSex,
    ocean: userFavoriteOcean,
  });

  const onBackPersonalInformation = (): void => {
    navigate(`${Path.Registration}${Path.PersonalInformation}`);
  };

  return (
    <div className={styles.profile}>
      <Title text="Have you finished registering" />
      <CustomButton color="secondary" onClick={onBackPersonalInformation}>
        Back
      </CustomButton>
      <Modal onClose={onCloseModal} isOpen={isOpenModal}>
        <div className={styles.modalData}>
          {userData.map(({ data, title }) => (
            <Box key={title} label={title}>
              <div className={styles.textDataType}>{data}</div>
            </Box>
          ))}
        </div>
      </Modal>
    </div>
  );
};
