import { useState } from 'react';

export const useModal = (): [
  isOpenModal: boolean,
  onOpenModal: () => void,
  onCloseModal: () => void,
] => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const onCloseModal = (): void => {
    setIsOpenModal(false);
  };

  const onOpenModal = (): void => {
    setIsOpenModal(true);
  };

  return [isOpenModal, onOpenModal, onCloseModal];
};
