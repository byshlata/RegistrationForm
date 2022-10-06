import React, { ReactElement } from 'react';

import { ElementType } from '../../types/ElementType';
import style from '../styles/styles.module.sass';

export const ElementWaiting = ({ value }: ElementType): ReactElement => (
  <div className={style.waiting}>
    <span className={style.item}>{value}</span>
  </div>
);
