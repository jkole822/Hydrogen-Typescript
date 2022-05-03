// React
import {AllHTMLAttributes, FC} from 'react';

// Packages
import {CartProvider as ShopifyCartProvider} from '@shopify/hydrogen/client';
import {Provider} from 'react-redux';

// Redux
import {store, openCart, useAppDispatch} from '@/lib/redux';

// Types
interface ProviderInterface extends AllHTMLAttributes<HTMLElement> {
  numCartLines?: number;
}

/**
 * A client component that creates a cart object and provides callbacks that can be accessed by any descendent component using the `useCart` hook and related hooks
 */
const ShopifyProvider: FC<ProviderInterface> = ({children, numCartLines}) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <ShopifyCartProvider
        numCartLines={numCartLines}
        onLineAdd={() => dispatch(openCart())}
        onCreate={() => dispatch(openCart())}
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
    <Provider store={store}>
      <ShopifyProvider numCartLines={numCartLines}>{children}</ShopifyProvider>
    </Provider>
  );
};
