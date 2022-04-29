// React
import {FC} from 'react';

// Packages
import {CartLines} from '@shopify/hydrogen/client';

// Components
import {LineInCart} from '..';

// Styles
import {OuterContainerStyles, SrOnlyStyles} from './styles';

export const CartItems: FC = () => (
  <div className={OuterContainerStyles} role="table" aria-label="Shopping cart">
    <div role="row" className={SrOnlyStyles}>
      <div role="columnheader">Product image</div>
      <div role="columnheader">Product details</div>
      <div role="columnheader">Price</div>
    </div>
    <CartLines>
      <LineInCart />
    </CartLines>
  </div>
);
