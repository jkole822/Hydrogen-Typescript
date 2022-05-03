// React
import {FC} from 'react';

// Redux
import {closeCart, useAppDispatch} from '@/lib/redux';

// Styles
import {ContainerStyles, ParagraphStyles} from './styles';
import {PrimaryButtonStyles} from '@/components/client/Button/styles';

export const CartEmpty: FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div className={ContainerStyles}>
      <p className={ParagraphStyles}>Your cart is empty</p>
      <button
        type="button"
        onClick={() => dispatch(closeCart())}
        className={PrimaryButtonStyles}
      >
        Continue Shopping
      </button>
    </div>
  );
};
