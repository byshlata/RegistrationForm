import React, { ReactElement } from 'react';

import style from '../styles/styles.module.sass';

export const ElementFinished = (): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={style.finished}
    viewBox="0 0 48 48"
    version="1"
    enableBackground="new 0 0 48 48"
  >
    <polygon
      fill="#1890ff"
      points="34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"
    />
  </svg>
);
