// React
import React, {
  AllHTMLAttributes,
  createContext,
  FC,
  useCallback,
  useContext,
  useState,
  useMemo,
} from 'react';

// Types
interface CartContextInterface {
  isCartOpen?: boolean;
  openCart?: any;
  closeCart?: any;
  toggleCart?: any;
}

export const CartContext = createContext<CartContextInterface>({});

/**
 * A client component that defines the behavior that occurs when a user is interacting with a cart (for example, opening or closing it)
 */
export const CartUIProvider: FC<AllHTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  const [open, setOpen] = useState(false);

  const openCart = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const closeCart = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const toggleCart = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  const contextValue = useMemo(() => {
    return {
      isCartOpen: open,
      openCart,
      closeCart,
      toggleCart,
    };
  }, [open, openCart, closeCart, toggleCart]);

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export const useCartUI = () => {
  return useContext(CartContext);
};
