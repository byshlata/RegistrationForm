import { ReactNode } from 'react';

export type BoxType = {
  label: string;
  children: ReactNode;
  error?: string;
};
