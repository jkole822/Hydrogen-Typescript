// React
import {FC} from 'react';

// Components
import {ArrowIcon} from '..';
import {CartIconWithItems} from '@/components/client/CartIconWithItems';
import {useCartUI} from '@/lib/context/CartUIProvider.client';

// Styles
import {HeaderStyles, SpanStyles, SrOnlyStyles} from './styles';

export const CartHeader: FC = () => {
  const {closeCart} = useCartUI();

  return (
    <header className={HeaderStyles}>
      <button type="button" onClick={closeCart}>
        <ArrowIcon />
        <span className={SrOnlyStyles}>Close cart</span>
      </button>
      <span className={SpanStyles}>Free shipping on orders over $50</span>
      <CartIconWithItems />
    </header>
  );
};
