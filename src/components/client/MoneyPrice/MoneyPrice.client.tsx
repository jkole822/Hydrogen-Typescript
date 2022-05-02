// React
import {FC} from 'react';

// Packages
import {useMoney} from '@shopify/hydrogen/client';

// Styles
import {SpanStyles} from './styles';

// Types
import {MoneyPriceProps} from './types';

/**
 * A client component that defines the currency code, currency symbol, and amount of a product
 */
export const MoneyPrice: FC<MoneyPriceProps> = ({money}) => {
  const {currencyCode, currencyNarrowSymbol, amount} = useMoney(money);
  return (
    <span className={SpanStyles}>
      {currencyCode}
      {currencyNarrowSymbol}
      {amount}
    </span>
  );
};
