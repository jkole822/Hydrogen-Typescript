// React
import {FC} from 'react';

// Packages
import {
  CartLineQuantity,
  CartLineQuantityAdjustButton,
} from '@shopify/hydrogen/client';

// Styles
import {
  CartLineQuantityStyles,
  CartLineQuantityAdjustButtonOneStyles,
  CartLineQuantityAdjustButtonTwoStyles,
  OuterContainer,
  SvgOneStyles,
  SvgTwoStyles,
} from './styles';

export const CartItemQuantity: FC = () => (
  <div className={OuterContainer}>
    <CartLineQuantityAdjustButton
      adjust="decrease"
      aria-label="Decrease quantity"
      className={CartLineQuantityAdjustButtonOneStyles}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={SvgOneStyles}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
          clipRule="evenodd"
        />
      </svg>
    </CartLineQuantityAdjustButton>
    <CartLineQuantity as="div" className={CartLineQuantityStyles} />
    <CartLineQuantityAdjustButton
      adjust="increase"
      aria-label="Increase quantity"
      className={CartLineQuantityAdjustButtonTwoStyles}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={SvgTwoStyles}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </CartLineQuantityAdjustButton>
  </div>
);
