// React
import {FC} from 'react';

// Packages
import {
  CartCheckoutButton,
  CartShopPayButton,
  CartEstimatedCost,
} from '@shopify/hydrogen/client';

// Styles
import {PrimaryButtonStyles} from '@/components/client/Button/styles';
import {
  CartShopPayButtonStyles,
  FooterStyles,
  InnerContainerOneStyles,
  InnerContainerTwoStyles,
  OuterContainerStyles,
  SpanOneStyles,
  SpanTwoStyles,
} from './styles';

export const CartFooter: FC = () => (
  <footer className={FooterStyles}>
    <div className={OuterContainerStyles}>
      <div role="table" aria-label="Cost summary">
        <div role="row" className={InnerContainerOneStyles}>
          <span className={SpanOneStyles} role="rowheader">
            Subtotal
          </span>
          <CartEstimatedCost
            amountType="subtotal"
            role="cell"
            className="text-right "
          />
        </div>
        <div role="row" className={InnerContainerTwoStyles}>
          <span className={SpanOneStyles} role="rowheader">
            Shipping
          </span>
          <span role="cell" className={SpanTwoStyles}>
            Free
          </span>
        </div>
      </div>
      <CartShopPayButton className={CartShopPayButtonStyles} />
      <CartCheckoutButton className={PrimaryButtonStyles}>
        Checkout
      </CartCheckoutButton>
    </div>
  </footer>
);
