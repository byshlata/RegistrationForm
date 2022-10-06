import React, { ReactElement, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import mainStyle from '../../styles/container.module.sass';

import styles from './Header.module.sass';

import { Logo } from 'components';
import { Step } from 'components/steps/components/step/Step';
import { Steps } from 'components/steps/Steps';
import { Path } from 'enums';
import { selectorRegistrationPage } from 'store';
import { Nullable } from 'types';

type StepDataType = {
  title: string;
  description: string;
};

const data: StepDataType[] = [
  { title: 'Sing up', description: 'Enter data for registration' },
  {
    title: 'User information',
    description: 'Finish registration and enter information about yourself',
  },
];

const NUMBER_SING_UP_PAGE = 1;
const NUMBER_PERSONAL_INFORMATION_PAGE = 2;
const NUMBER_PROFILE_PAGE = 3;

export const Header = (): ReactElement => {
  const registrationPage = useSelector(selectorRegistrationPage);

  const [currentStep, setCurrentStep] = useState<Nullable<number>>(null);

  useEffect(() => {
    if (registrationPage === Path.SingUp) {
      setCurrentStep(NUMBER_SING_UP_PAGE);
    }
    if (registrationPage === Path.PersonalInformation) {
      setCurrentStep(NUMBER_PERSONAL_INFORMATION_PAGE);
    }
    if (registrationPage === Path.Profile) {
      setCurrentStep(NUMBER_PROFILE_PAGE);
    }
  }, [registrationPage]);

  return (
    <>
      <div className={styles.header}>
        <div className={mainStyle.container}>
          <Logo />
        </div>
      </div>
      <div className={mainStyle.container}>
        <div className={styles.stepWrapper}>
          {currentStep && (
            <Steps current={currentStep}>
              {data.map(({ title, description }) => (
                <Step key={title} title={title} description={description} />
              ))}
            </Steps>
          )}
        </div>
      </div>
    </>
  );
};
