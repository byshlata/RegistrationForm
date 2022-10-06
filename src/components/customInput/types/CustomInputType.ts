import { ChangeEvent, DetailedHTMLProps, InputHTMLAttributes } from 'react';

type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type CustomInputType = DefaultInputPropsType & {
  name?: string;
  type: InputType;
  error?: string;
  className?: string;
  disabled?: boolean;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
};

export type InputType = 'search' | 'password' | 'simple' | 'checkbox' | 'tel' | 'date';
