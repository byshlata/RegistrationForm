import { ReactNode } from 'react';

export type ModalType = {
  onClose: () => void;
  isOpen: boolean;
  children?: ReactNode;
};
