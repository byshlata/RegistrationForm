import React, { ReactElement } from 'react';

import { StepsState } from '../../enums/StepsState';
import { ElementFinished } from '../elementFinished/ElementFinished';
import { ElementProcessed } from '../elementProcessed/ElementProcessed';
import { ElementWaiting } from '../elementWaiting/ElementWaiting';

import style from './Step.module.sass';

type StepType = {
  title: string;
  description: string;
  // eslint-disable-next-line react/require-default-props
  stepState?: StepsState;
  // eslint-disable-next-line react/require-default-props
  count?: number;
};

export const Step = ({
  stepState,
  count,
  description,
  title,
}: StepType): ReactElement => {
  const element: ReactElement =
    // eslint-disable-next-line no-nested-ternary
    stepState === 'finished' ? (
      <ElementFinished />
    ) : stepState === 'processed' ? (
      <ElementProcessed value={count} />
    ) : (
      <ElementWaiting value={count} />
    );

  return (
    <div>
      {element}
      <div className={style.textWrapper}>
        <div className={style.title}>{title}</div>
        <div className={style.description}>{description}</div>
      </div>
    </div>
  );
};
