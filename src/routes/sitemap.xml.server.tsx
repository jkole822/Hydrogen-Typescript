// React
import {FC} from 'react';

// Packages
import {useShopQuery, useShop} from '@shopify/hydrogen';

// GraphQL
import {SITEMAPS} from '@/lib/graphQL';

// Helpers
import {shopSitemap} from './helpers';

// Types
import {SitemapProps} from './types';

const MAX_URLS = 250; // the google limit is 50K, however, SF API only allow querying for 250 resources each time

const Sitemap: FC<SitemapProps> = ({request, response}) => {
  response.doNotStream();

  const {languageCode} = useShop();

  const {data}: any = useShopQuery({
    query: SITEMAPS,
    variables: {
      language: languageCode,
      urlLimits: MAX_URLS,
    },
    // Cache the page for 24 hours
    cache: {maxAge: 60 * 60 * 24},
  });

  response.headers.set('content-type', 'application/xml');

  return response.send(shopSitemap(data, request.url));
};

export default Sitemap;
