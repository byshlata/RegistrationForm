import React, { ChangeEvent, ReactElement } from 'react';

import styles from './CustomSelect.module.sass';
import { CustomSelectType } from './types/CustomSelectType';

export const CustomSelect = ({
  options,
  onChangeOption,
  value,
  error,
  ...restProps
}: CustomSelectType): ReactElement => {
  const mappedOptions: ReactElement[] = options
    ? options.map(name => <option key={`${name}`}>{name}</option>)
    : [];

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>): void => {
    if (onChangeOption) {
      onChangeOption(e.currentTarget.value);
    }
  };

  const classSelect = error ? styles.selectError : styles.select;

  return (
    <select
      className={classSelect}
      onChange={onChangeCallback}
      value={value}
      {...restProps}
    >
      <option key="defaultValue" value="" disabled hidden>
        Checked value
      </option>
      {mappedOptions}
    </select>
  );
};
