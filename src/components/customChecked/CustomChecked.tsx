import React, { ChangeEvent, ReactElement } from 'react';

import styles from './CustomChecked.module.sass';
import { CustomCheckedType } from './types/CustomCheckedType';

export const CustomChecked = ({
  tags,
  options,
  onChange,
  checkedElement,
}: CustomCheckedType): ReactElement => {
  const onChangeOneCheckbox = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, name } = e.currentTarget;
    if (checked) {
      onChange(tags, [...checkedElement, name]);
    } else {
      onChange(
        tags,
        checkedElement.filter(value => value !== name),
      );
    }
  };

  return (
    <div className={styles.checkedWrapper}>
      {options.map(element => (
        <span key={element} className={styles.checkedItem}>
          <input
            className={styles.customCheckbox}
            type="checkbox"
            onChange={onChangeOneCheckbox}
            checked={checkedElement.includes(element)}
            name={element}
          />
          {element}
        </span>
      ))}
    </div>
  );
};
