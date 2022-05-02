// React
import {FC} from 'react';

// Packages
import {
  useProduct,
  AddToCartButton,
  BuyNowButton,
} from '@shopify/hydrogen/client';

// Components
import {
  PrimaryButtonStyles,
  SecondaryButtonStyles,
} from '@/components/client/Button';

// Styles
import {OuterContainerStyles, ParagraphStyles} from './styles';

export const AddToCartMarkup: FC = () => {
  const {selectedVariant} = useProduct();
  const isOutOfStock = !selectedVariant?.availableForSale;

  return (
    <div className={OuterContainerStyles}>
      <AddToCartButton className={PrimaryButtonStyles} disabled={isOutOfStock}>
        {isOutOfStock ? 'Out of stock' : 'Add to bag'}
      </AddToCartButton>
      {isOutOfStock ? (
        <p className={ParagraphStyles}>Available in 2-3 weeks</p>
      ) : (
        <>
          {selectedVariant ? (
            <BuyNowButton
              variantId={selectedVariant.id}
              className={SecondaryButtonStyles}
            >
              Buy it now
            </BuyNowButton>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};
