// React
import {FC} from 'react';

// Packages
import {Dialog} from '@headlessui/react';
import {useCart} from '@shopify/hydrogen/client';

// Components
import {CartEmpty, CartFooter, CartHeader, CartItems} from './components';
import {useCartUI} from '@/lib/context/CartUIProvider.client';

// Styles
import {
  OuterContainerStyles,
  DialogOverlayStyles,
  InnerContainerStyles,
} from './styles';

/**
 * A client component that contains the merchandise that a customer intends to purchase, and the estimated cost associated with the cart
 */
export const Cart: FC = () => {
  const {isCartOpen, closeCart} = useCartUI();
  const {totalQuantity} = useCart();

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={OuterContainerStyles(isCartOpen)}
        onClick={isCartOpen ? closeCart : undefined}
      />
      <Dialog open={isCartOpen} onClose={closeCart}>
        <Dialog.Overlay className={DialogOverlayStyles} />
        <div className={InnerContainerStyles(totalQuantity)}>
          <CartHeader />
          {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartItems />
              <CartFooter />
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
};
