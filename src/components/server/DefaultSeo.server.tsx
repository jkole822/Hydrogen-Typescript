// React
import {FC} from 'react';

// Packages
import {useShopQuery, Seo, CacheDays} from '@shopify/hydrogen';

// GraphQL
import {SHOP_INFO} from '@/lib/graphQL';

/**
 * A server component that fetches a `shop.name` and sets default values and templates for every page on a website
 */
export const DefaultSeo: FC = () => {
  const {
    data: {
      shop: {name, description},
    },
  } = useShopQuery({
    query: SHOP_INFO,
    cache: CacheDays(),
    preload: '*',
  });

  return (
    //@ts-ignore
    <Seo
      type="defaultSeo"
      data={{
        title: name,
        description,
      }}
    />
  );
};
