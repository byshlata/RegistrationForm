import { useState } from 'react';

import { InputType } from '../types/CustomInputType';
import { createLabel } from '../utils/createLabel';

type usePasswordInputReturnType = {
  typeInputValue: 'password' | 'text';
  onWatchPassword: () => void;
  isEyeIcon: boolean;
  isEyeOpenIcon: boolean;
  isSearchIcon: boolean;
  labelName: string;
};

export const usePasswordInput = (
  type: InputType,
  error = '',
  name = '',
): usePasswordInputReturnType => {
  const [isWatchPassword, setIsWatchPassword] = useState<boolean>(false);

  const watchValue = isWatchPassword ? 'text' : 'password';

  const typeInputValue = type !== 'password' ? 'text' : watchValue;

  const onWatchPassword = (): void => {
    setIsWatchPassword(!isWatchPassword);
  };

  const labelName = error || createLabel(name);

  const isEyeIcon = type === 'password';
  const isSearchIcon = type === 'search';
  const isEyeOpenIcon = type === 'password' && isWatchPassword;

  return {
    typeInputValue,
    onWatchPassword,
    isEyeIcon,
    isEyeOpenIcon,
    isSearchIcon,
    labelName,
  };
};
