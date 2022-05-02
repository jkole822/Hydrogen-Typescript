// React
import {FC, Suspense} from 'react';

// Packages
import {Image, Link} from '@shopify/hydrogen';

// Components
import {MoneyCompareAtPrice} from '@/components/client/MoneyCompareAtPrice';
import {MoneyPrice} from '@/components/client/MoneyPrice';

// Styles
import {
  ImageStyles,
  InnerContainerStyles,
  OuterContainerStyles,
  OutOfStockStyles,
  MoneyStyles,
  TitleStyles,
  VendorStyles,
} from './styles';

// Types
import {ProductCardProps} from './types';

/**
 * A shared component that displays a single product to allow buyers to quickly identify a particular item of interest
 */
export const ProductCard: FC<ProductCardProps> = ({product}) => {
  const selectedVariant = product.variants.edges[0].node;

  if (selectedVariant == null) {
    return null;
  }

  return (
    <div className={OuterContainerStyles}>
      <Link to={`/products/${product.handle}`}>
        <div className={InnerContainerStyles}>
          {selectedVariant.image ? (
            <Image className={ImageStyles} data={selectedVariant.image} />
          ) : null}
          {!selectedVariant?.availableForSale && (
            <div className={OutOfStockStyles}>Out of stock</div>
          )}
        </div>

        <span className={TitleStyles}>{product.title}</span>

        {product.vendor && <p className={VendorStyles}>{product.vendor}</p>}

        <div className={MoneyStyles}>
          {selectedVariant.compareAtPriceV2 && (
            <Suspense fallback={null}>
              <MoneyCompareAtPrice money={selectedVariant.compareAtPriceV2} />
            </Suspense>
          )}
          <Suspense fallback={null}>
            <MoneyPrice money={selectedVariant.priceV2} />
          </Suspense>
        </div>
      </Link>
    </div>
  );
};
