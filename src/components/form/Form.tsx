import React, { ReactElement } from 'react';

import styles from './FormType.module.sass';

type FormType = {
  children: ReactElement[];
};

export const Form = ({ children }: FormType): ReactElement => (
  <div className={styles.form}>{children.map(child => child)}</div>
);
