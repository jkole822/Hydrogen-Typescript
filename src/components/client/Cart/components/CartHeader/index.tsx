// React
import {FC} from 'react';

// Components
import {ArrowIcon} from '..';
import {CartIconWithItems} from '@/components/client/CartIconWithItems';

// Redux
import {closeCart, useAppDispatch} from '@/lib/redux';

// Styles
import {HeaderStyles, SpanStyles, SrOnlyStyles} from './styles';

export const CartHeader: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={HeaderStyles}>
      <button type="button" onClick={() => dispatch(closeCart())}>
        <ArrowIcon />
        <span className={SrOnlyStyles}>Close cart</span>
      </button>
      <span className={SpanStyles}>Free shipping on orders over $50</span>
      <CartIconWithItems />
    </header>
  );
};
