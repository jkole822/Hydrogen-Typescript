// React
import {AllHTMLAttributes, FC, useCallback} from 'react';

// Packages
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';

// Components
import {CartUIProvider, useCartUI} from './CartUIProvider.client';

// Types
interface ProviderInterface extends AllHTMLAttributes<HTMLElement> {
  numCartLines: number;
}

/**
 * A client component that creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks
 */
const Provider: FC<ProviderInterface> = ({children, numCartLines}) => {
  const {openCart} = useCartUI();

  const open = useCallback(() => {
    openCart();
  }, [openCart]);

  return (
    <>
      <ShopifyCartProvider
        numCartLines={numCartLines}
        onLineAdd={open}
        onCreate={open}
      >
        {children}
      </ShopifyCartProvider>
    </>
  );
};

export const CartProvider: FC<ProviderInterface> = ({
  children,
  numCartLines,
}) => {
  return (
    <CartUIProvider>
      <Provider numCartLines={numCartLines}>{children}</Provider>
    </CartUIProvider>
  );
};
