import { ColorCustomButtonType } from '../types/ColorCustomButtonType';

export const useStyleCustomButton = (
  color: ColorCustomButtonType,
  disabled = false,
  style: any,
): string => {
  let buttonClassName = style.primaryButton;

  if (color === 'primary' && !disabled) {
    buttonClassName = style.primaryButton;
  }

  if (color === 'secondary' && !disabled) {
    buttonClassName = style.secondaryButton;
  }

  if (color === 'danger' && !disabled) {
    buttonClassName = style.dangerButton;
  }

  if (color === 'disabled' || disabled) {
    buttonClassName = style.disabledButton;
  }

  if (color === 'link' && disabled) {
    buttonClassName = style.disabledButtonLink;
  }

  if (color === 'link' && !disabled) {
    buttonClassName = style.linkButton;
  }

  return buttonClassName;
};
