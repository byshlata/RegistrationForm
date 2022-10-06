import React, { ChangeEvent, ReactElement } from 'react';

import styles from './CustomRadio.module.sass';
import { CustomRadioType } from './types/CustomRadioType';

export const CustomRadio = ({
  name,
  options,
  value,
  onChangeOption,
  ...restProps
}: CustomRadioType): ReactElement => {
  const onChangeCallback = (e: ChangeEvent<HTMLInputElement>): void => {
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value);
    }
  };

  const mappedOptions: ReactElement[] = options
    ? options.map(element => (
        <span
          key={element}
          className={element === value ? styles.labelStyleActive : styles.labelStyle}
        >
          <input
            type="radio"
            name={name}
            checked={element === value}
            value={element}
            onChange={onChangeCallback}
            className={element === value ? styles.inputStyleActive : styles.inputStyle}
            {...restProps}
          />
          {element}
        </span>
      ))
    : [];

  return <div className={styles.radioWrapper}>{mappedOptions}</div>;
};
