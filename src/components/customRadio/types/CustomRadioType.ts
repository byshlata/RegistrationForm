import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultRadioPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CustomRadioType = DefaultRadioPropsType & {
  options?: string[];
  onChangeOption?: (option: string) => void;
};
