import React, { ReactElement } from 'react';

import styles from './BoxType.module.sass';
import { BoxType } from './types/BoxType';

export const Box = ({ children, label, error }: BoxType): ReactElement => {
  const classBox = error ? styles.boxError : styles.box;
  const classLabel = error ? styles.labelError : styles.label;
  const labelText = error || label;

  return (
    <div className={classBox}>
      <span className={classLabel}>{labelText}</span>
      {children}
    </div>
  );
};
