// React
import {FC} from 'react';

// Packages
import {useShopQuery, Seo, CacheDays} from '@shopify/hydrogen';

// GraphQL
import {HOME_SHOP_INFO} from '@/lib/graphQL';

export const SeoForHomepage: FC = () => {
  const {
    data: {
      shop: {title, description},
    },
  } = useShopQuery({
    query: HOME_SHOP_INFO,
    cache: CacheDays(),
    preload: true,
  });

  return (
    <Seo
      type="homepage"
      data={{
        title,
        description,
      }}
    />
  );
};
