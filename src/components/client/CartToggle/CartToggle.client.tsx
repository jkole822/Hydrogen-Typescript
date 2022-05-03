// React
import {FC} from 'react';

// Components
import {CartIconWithItems} from '@/components/client/CartIconWithItems';

// Redux
import {toggleCart, useAppDispatch, useAppSelector} from '@/lib/redux';

// Styles
import {SrOnlyStyles} from './styles';

// Types
import {CartToggleProps} from './types';

/**
 * A client component that defines the behavior when a user toggles a cart
 */
export const CartToggle: FC<CartToggleProps> = ({handleClick}) => {
  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const dispatch = useAppDispatch();

  return (
    <button
      type="button"
      aria-expanded={isCartOpen}
      aria-controls="cart"
      onClick={() => {
        dispatch(toggleCart());
        handleClick();
      }}
    >
      <CartIconWithItems />
      <span className={SrOnlyStyles}>Open cart</span>
    </button>
  );
};
