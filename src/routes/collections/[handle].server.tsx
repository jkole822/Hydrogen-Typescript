// React
import {FC} from 'react';

// Packages
import {useShop, useShopQuery, flattenConnection, Seo} from '@shopify/hydrogen';

// Components
import {LoadMoreProducts} from '@/components/client/LoadMoreProducts';
import Layout from '@/components/server/Layout/index.server';
import {ProductCard} from '@/components/hybrid/ProductCard';
import NotFound from '@/components/server/NotFound/index.server';

// GraphQL
import {COLLECTION_DETAILS} from '@/lib/graphQL';

// Styles
import {
  HeadlineStyles,
  ParagraphStyles,
  ContainerStyles,
  ListStyles,
} from './styles';

// Types
import {CollectionProps} from './types';

const Collection: FC<CollectionProps> = ({
  country = {isoCode: 'US'},
  collectionProductCount = 24,
  params,
}) => {
  const {languageCode} = useShop();

  const {handle} = params;
  const {data}: any = useShopQuery({
    query: COLLECTION_DETAILS,
    variables: {
      handle,
      country: country.isoCode,
      language: languageCode,
      numProducts: collectionProductCount,
    },
    preload: true,
  });

  if (data?.collection == null) {
    return <NotFound />;
  }

  const collection = data.collection;
  const products = flattenConnection(collection.products);
  const hasNextPage = data.collection.products.pageInfo.hasNextPage;

  return (
    <Layout>
      {/* the seo object will be expose in API version 2022-04 or later */}
      <Seo type="collection" data={collection} />
      <h1 className={HeadlineStyles}>{collection.title}</h1>
      <div
        dangerouslySetInnerHTML={{__html: collection.descriptionHtml}}
        className={ContainerStyles}
      />
      <p className={ParagraphStyles}>
        {products.length} {products.length > 1 ? 'products' : 'product'}
      </p>
      <ul className={ListStyles}>
        {products.map((product: any) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      {hasNextPage && (
        <LoadMoreProducts startingCount={collectionProductCount} />
      )}
    </Layout>
  );
};

export default Collection;
