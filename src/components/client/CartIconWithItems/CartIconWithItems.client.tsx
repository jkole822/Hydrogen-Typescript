// React
import {FC} from 'react';

// Packages
import {useCart} from '@shopify/hydrogen/client';

// Components
import CartIcon from '@/components/hybrid/CartIcon';

// Styles
import {
  OuterContainerStyles,
  InnerContainerStyles,
  SrOnlyStyles,
} from './styles';

/**
 * A client component that specifies the icon to use if a cart contains merchandise
 */
export const CartIconWithItems: FC = () => {
  const {totalQuantity} = useCart();

  return (
    <>
      <div className={OuterContainerStyles}>
        <CartIcon />

        <div className={InnerContainerStyles(totalQuantity)} aria-hidden>
          {totalQuantity > 0 ? totalQuantity : null}
        </div>
      </div>
      <span className={SrOnlyStyles}>Cart, {totalQuantity} items</span>
    </>
  );
};
