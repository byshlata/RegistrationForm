import { DetailedHTMLProps, SelectHTMLAttributes } from 'react';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

export type CustomSelectType = DefaultSelectPropsType & {
  error?: string;
  options?: Array<string>;
  onChangeOption?: (option: string) => void;
  value: string;
};
