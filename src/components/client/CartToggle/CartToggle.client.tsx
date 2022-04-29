// React
import {FC} from 'react';

// Components
import {useCartUI} from '@/lib/context/CartUIProvider.client';
import {CartIconWithItems} from '@/components/client/CartIconWithItems';

// Styles
import {SrOnlyStyles} from './styles';

// Types
import {CartToggleProps} from './types';

/**
 * A client component that defines the behavior when a user toggles a cart
 */
export const CartToggle: FC<CartToggleProps> = ({handleClick}) => {
  const cartUI = useCartUI();

  if (cartUI == null) {
    throw new Error('CartToggle must be a descendent of a CartUIProvider');
  }

  const {isCartOpen, toggleCart} = cartUI;

  return (
    <button
      type="button"
      aria-expanded={isCartOpen}
      aria-controls="cart"
      onClick={() => {
        toggleCart();
        handleClick();
      }}
    >
      <CartIconWithItems />
      <span className={SrOnlyStyles}>Open cart</span>
    </button>
  );
};
