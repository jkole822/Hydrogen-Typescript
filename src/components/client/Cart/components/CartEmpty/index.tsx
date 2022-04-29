// React
import {FC} from 'react';

// Components
import {useCartUI} from '@/lib/context/CartUIProvider.client';

// Styles
import {ContainerStyles, ParagraphStyles} from './styles';
import {PrimaryButtonStyles} from '@/components/client/Button/styles';

export const CartEmpty: FC = () => {
  const {closeCart} = useCartUI();

  return (
    <div className={ContainerStyles}>
      <p className={ParagraphStyles}>Your cart is empty</p>
      <button type="button" onClick={closeCart} className={PrimaryButtonStyles}>
        Continue Shopping
      </button>
    </div>
  );
};
