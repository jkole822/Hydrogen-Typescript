// React
import {FC} from 'react';

// Packages
import {useMoney} from '@shopify/hydrogen/client';

// Styles
import {SpanStyles} from './styles';

// Types
import {MoneyCompareAtPriceProps} from './types';

/**
 * A client component that renders a product's compare at price
 */
export const MoneyCompareAtPrice: FC<MoneyCompareAtPriceProps> = ({money}) => {
  const {amount, currencyNarrowSymbol} = useMoney(money);
  return (
    <span className={SpanStyles}>
      {currencyNarrowSymbol}
      {amount}
    </span>
  );
};
