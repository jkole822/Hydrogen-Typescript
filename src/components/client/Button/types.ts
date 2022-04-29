export enum ButtonEnum {
  primary = 'primary',
  secondary = 'secondary',
}

export type ButtonVariant = ButtonEnum.primary | ButtonEnum.secondary;

export interface ButtonProps {
  className: string;
  label: string;
  handleClick: any;
  url: string;
  variant: ButtonEnum;
  passthroughProps: any;
}
