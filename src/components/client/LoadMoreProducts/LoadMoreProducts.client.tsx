// React
import {FC} from 'react';

// Packages
import {useServerProps} from '@shopify/hydrogen/client';
import SpinnerIcon from '@/components/client/SpinnerIcon.client';

// Styles
import {ButtonStyles, OuterContainerStyles} from './styles';

// Types
import {LoadMoreProductsProps} from './types';

/**
 * A client component that provides functionality to initially show a subset of products and a button to load more products
 */
export const LoadMoreProducts: FC<LoadMoreProductsProps> = ({
  startingCount,
}) => {
  const {pending, serverProps, setServerProps} = useServerProps();

  return (
    <div className={OuterContainerStyles}>
      {pending ? (
        <SpinnerIcon />
      ) : (
        <button
          type="button"
          disabled={pending}
          className={ButtonStyles(pending)}
          onClick={() => {
            setServerProps(
              'collectionProductCount',
              serverProps.collectionProductCount
                ? serverProps.collectionProductCount + 24
                : startingCount + 1,
            );
          }}
        >
          Load more
        </button>
      )}
    </div>
  );
};
