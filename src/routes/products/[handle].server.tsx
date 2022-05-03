// React
import {FC} from 'react';

// Packages
import {useShop, useShopQuery, Seo, useRouteParams} from '@shopify/hydrogen';

// Components
import {ProductDetails} from '@/components/client/ProductDetails';
import NotFound from '@/components/server/NotFound/index.server';
import Layout from '@/components/server/Layout/index.server';

// GraphQL
import {PRODUCT} from '@/lib/graphQL';

// Types
import {ProductProps} from './types';

const Product: FC<ProductProps> = ({country = {isoCode: 'US'}}) => {
  const {handle} = useRouteParams();

  const {languageCode} = useShop();

  const {
    data: {product},
  } = useShopQuery({
    query: PRODUCT,
    variables: {
      country: country.isoCode,
      language: languageCode,
      handle,
    },
    preload: true,
  });

  if (!product) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Seo type="product" data={product} />
      <ProductDetails product={product} />
    </Layout>
  );
};

export default Product;
