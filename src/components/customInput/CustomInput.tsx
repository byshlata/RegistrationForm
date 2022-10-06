import React, { ReactElement, ReactNode } from 'react';

import style from './CustomInput.module.sass';
import { useClassInputElement, usePasswordInput } from './hooks';
import { EyeIconCloseSvg, EyeIconOpenSVG, SearchIconSvg } from './iconsSVG';
import { CustomInputType } from './types/CustomInputType';

export const CustomInput = React.memo(
  ({
    type,
    name,
    error,
    disabled,
    onClick,
    value,
    onChange,
    className,
    ...restProps
  }: CustomInputType): ReactElement => {
    const {
      onWatchPassword,
      typeInputValue,
      isEyeOpenIcon,
      isEyeIcon,
      isSearchIcon,
      labelName,
    } = usePasswordInput(type, error, name);

    const { classBar, classInput, classLabel, classIcon, classSearchIcon } =
      useClassInputElement(error, disabled);

    const iconEye: ReactNode = isEyeOpenIcon ? (
      <button onClick={onWatchPassword} className={classIcon} type="button">
        <EyeIconOpenSVG />
      </button>
    ) : (
      <button onClick={onWatchPassword} className={classIcon} type="button">
        <EyeIconCloseSvg />
      </button>
    );

    const iconSearch: ReactNode = (
      <button
        disabled={disabled}
        onClick={onClick}
        className={classSearchIcon}
        type="button"
      >
        <SearchIconSvg />
      </button>
    );

    return (
      <div className={style.centered}>
        <div className={style.group}>
          <input
            name={name}
            type={type === 'password' ? typeInputValue : type}
            className={`${classInput}${className ? ` ${className}` : ''}`}
            required
            disabled={disabled}
            value={value}
            onChange={onChange}
            {...restProps}
          />
          <span className={classLabel}>{labelName}</span>
          <div className={classBar} />
          {isEyeIcon && <div>{iconEye}</div>}
          {isSearchIcon && <div>{iconSearch}</div>}
        </div>
      </div>
    );
  },
);
