// React
import {FC} from 'react';

// Packages
import {
  useShop,
  useShopQuery,
  flattenConnection,
  Link,
} from '@shopify/hydrogen';

// Components
import {ProductCard} from '@/components/hybrid/ProductCard';

// GraphQL
import {INDEX_CONTENT} from '@/lib/graphQL';

// Styles
import {
  OuterContainerStyles,
  SpanOneStyles,
  SpanTwoStyles,
  LinkOneStyles,
  LinkTwoStyles,
  LinkContainerStyles,
  InnerContainerStyles,
} from './styles';

// Types
import {FeaturedProductsBoxProps} from './types';

export const FeaturedProductsBox: FC<FeaturedProductsBoxProps> = ({
  country,
}) => {
  const {languageCode} = useShop();

  const {data}: any = useShopQuery({
    query: INDEX_CONTENT,
    variables: {
      country: country.isoCode,
      language: languageCode,
    },
    preload: true,
  });

  const collections = data ? flattenConnection(data.collections) : [];
  const featuredProductsCollection: any = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  return (
    <div className="">
      {featuredProductsCollection ? (
        <>
          <div className={OuterContainerStyles}>
            <span className={SpanOneStyles}>
              {featuredProductsCollection.title}
            </span>
            <span className={SpanTwoStyles}>
              <Link
                to={`/collections/${featuredProductsCollection.handle}`}
                className={LinkOneStyles}
              >
                Shop all
              </Link>
            </span>
          </div>
          <div className={InnerContainerStyles}>
            {featuredProducts?.map((product: any) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className={LinkContainerStyles}>
            <Link
              to={`/collections/${featuredProductsCollection.handle}`}
              className={LinkTwoStyles}
            >
              Shop all
            </Link>
          </div>
        </>
      ) : null}
    </div>
  );
};
