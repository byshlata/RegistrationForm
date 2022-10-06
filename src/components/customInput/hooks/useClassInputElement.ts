import style from '../CustomInput.module.sass';

type useClassInputElementReturnType = {
  classInput: string;
  classLabel: string;
  classBar: string;
  classIcon: string;
  classSearchIcon: string;
};

export const useClassInputElement = (
  error = '',
  disable = false,
): useClassInputElementReturnType => {
  const classInput =
    // eslint-disable-next-line no-nested-ternary
    (disable && error) || disable
      ? style.customInputDisable
      : error
      ? style.customInputError
      : style.customInput;

  const classLabel =
    // eslint-disable-next-line no-nested-ternary
    (disable && error) || disable
      ? style.customLabelDisable
      : error
      ? style.customLabelError
      : style.customLabel;

  const classBar =
    // eslint-disable-next-line no-nested-ternary
    (disable && error) || disable ? style.barDisable : error ? style.barError : style.bar;

  const classSearchIcon =
    (disable && error) || disable ? style.iconButtonDisable : style.iconButtonSearch;

  const classIcon =
    (disable && error) || disable ? style.iconButtonDisable : style.iconButton;

  return { classInput, classLabel, classBar, classIcon, classSearchIcon };
};
