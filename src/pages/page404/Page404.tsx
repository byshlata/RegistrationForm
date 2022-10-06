import React, { ReactElement } from 'react';

import { useNavigate } from 'react-router-dom';

import style from './Page404.module.sass';

import { CustomButton } from 'components';
import { Path } from 'enums';

export const Page404 = (): ReactElement => {
  const text = "Oops. The page you're looking for doesn't exist.";

  const navigate = useNavigate();

  const onLoginPage = (): void => {
    navigate(`${Path.Registration}${Path.SingUp}`);
  };

  return (
    <div className={style.center}>
      <div className={style.error}>
        <div className={style.illustration}>
          <div className={style.circle} />
          <div className={style.clip}>
            <div className={style.paper}>
              <div className={style.face}>
                <div className={style.eyes}>
                  <div className={`${style.eye} ${style.eyeLeft}`} />
                  <div className={`${style.eye} ${style.eyeRight}`} />
                </div>
                <div className={`${style.rosyCheeks} ${style.rosyCheeksLeft}`} />
                <div className={`${style.rosyCheeks} ${style.rosyCheeksRight}`} />
                <div className={style.mouth} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.text}>{text}</div>
      <div className={style.buttonWrapper}>
        <CustomButton color="primary" onClick={onLoginPage}>
          Go to back
        </CustomButton>
      </div>
    </div>
  );
};
