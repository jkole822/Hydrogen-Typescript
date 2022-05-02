import {FC} from 'react';

// Packages
import {useProduct, ProductPrice} from '@shopify/hydrogen/client';

import {OriginalPriceStyles, NewPriceStyles} from './styles';

export const ProductPrices: FC = () => {
  const product = useProduct();

  return (
    <>
      <ProductPrice
        className={OriginalPriceStyles}
        priceType="compareAt"
        variantId={product?.selectedVariant?.id}
      />
      <ProductPrice
        className={NewPriceStyles}
        variantId={product?.selectedVariant?.id}
      />
    </>
  );
};
