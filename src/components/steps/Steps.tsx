import React, { ReactElement } from 'react';

import styles from './Steps.module.sass';
import { createStepsArray } from './utils/createStepsArray';

import { Nullable } from 'types';

type StepsType = {
  current: Nullable<number>;
  children: ReactElement[];
};

export const Steps = ({ current, children }: StepsType): ReactElement => {
  const arrayStepData = createStepsArray(children.length, current);
  return (
    <div className={styles.steps}>
      {arrayStepData.map((value, index) =>
        React.cloneElement(children[index], {
          stepState: value,
          count: index + 1,
        }),
      )}
    </div>
  );
};
