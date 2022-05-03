// React
import {FC} from 'react';

// Packages
import {useShop, useShopQuery, flattenConnection} from '@shopify/hydrogen';

// Components
import {Layout} from '@/components/server/Layout/index.server';
import {ProductCard} from '@/components/hybrid/ProductCard';
import {NotFoundHero} from './components/NotFoundHero';

// GraphQL
import {NOT_FOUND_PRODUCT} from '@/lib/graphQL';

// Styles
import {
  OuterContainerStyles,
  ParagraphStyles,
  InnerContainerStyles,
} from './styles';

// Types
import {NotFoundProps} from './types';

/**
 * A server component that defines the content to display when a page isn't found (404 error)
 */
export const NotFound: FC<NotFoundProps> = ({
  country = {isoCode: 'US'},
  response,
}) => {
  if (response) {
    response.doNotStream();
    response.writeHead({status: 404, statusText: 'Not found'});
  }

  const {languageCode} = useShop();

  const {data}: any = useShopQuery({
    query: NOT_FOUND_PRODUCT,
    variables: {
      country: country.isoCode,
      language: languageCode,
    },
  });
  const products: any = data ? flattenConnection(data.products) : [];

  return (
    <Layout>
      <NotFoundHero />
      <div className={OuterContainerStyles}>
        <p className={ParagraphStyles}>Products you might like</p>
        <div className={InnerContainerStyles}>
          {products.map((product: any) => (
            <div key={product?.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};
