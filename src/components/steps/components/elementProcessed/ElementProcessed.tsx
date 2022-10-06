import React, { ReactElement } from 'react';

import { ElementType } from '../../types/ElementType';
import style from '../styles/styles.module.sass';

export const ElementProcessed = ({ value }: ElementType): ReactElement => (
  <div className={style.processed}>
    <span className={style.item}>{value}</span>
  </div>
);
