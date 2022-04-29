// React
import {FC} from 'react';

// Packages
import {Link} from '@shopify/hydrogen/client';

// Components
import {ExternalIcon} from './components';

// Styles
import {DefaultStyles, VariantStyles} from './styles';

// Types
import {ButtonEnum, ButtonProps} from './types';

/**
 * A client component that sets the primary and secondary classes for button components
 */
export const Button: FC<ButtonProps> = ({
  className,
  label,
  handleClick,
  url,
  variant = ButtonEnum.primary,
  passthroughProps,
}) => {
  const classes = `${DefaultStyles} ${VariantStyles[variant]} ${className}`;

  const isExternal = url
    ? url.indexOf('://') > 0 || url.indexOf('//') === 0
    : false;

  if (isExternal) {
    return (
      <a href={url} className={classes} {...passthroughProps}>
        {label}
        <ExternalIcon />
      </a>
    );
  }

  if (handleClick) {
    return (
      <button className={classes} onClick={handleClick} type="button">
        {label}
      </button>
    );
  }

  return (
    <Link to={url} className={classes} {...passthroughProps}>
      {label}
    </Link>
  );
};
