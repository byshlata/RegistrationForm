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
  const isErrorInput = error ? style.customInputError : style.customInput;
  const classInput =
    (disable && error) || disable ? style.customInputDisable : isErrorInput;

  const isErrorLabel = error ? style.customLabelError : style.customLabel;
  const classLabel =
    (disable && error) || disable ? style.customLabelDisable : isErrorLabel;

  const isErrorBar = error ? style.barError : style.bar;
  const classBar = (disable && error) || disable ? style.barDisable : isErrorBar;

  const classSearchIcon =
    (disable && error) || disable ? style.iconButtonDisable : style.iconButtonSearch;

  const classIcon =
    (disable && error) || disable ? style.iconButtonDisable : style.iconButton;

  return { classInput, classLabel, classBar, classIcon, classSearchIcon };
};
