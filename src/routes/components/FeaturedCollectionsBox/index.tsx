// React
import {FC} from 'react';

// Packages
import {useShop, useShopQuery, flattenConnection} from '@shopify/hydrogen';

// Components

import {FeaturedCollection} from '@/components/hybrid/FeaturedCollection';

// GraphQL
import {INDEX_CONTENT} from '@/lib/graphQL';

// Types
import {FeaturedCollectionsBoxProps} from './types';

export const FeaturedCollectionBox: FC<FeaturedCollectionsBoxProps> = ({
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
  const featuredCollection: any =
    collections && collections.length > 1 ? collections[1] : collections[0];

  return <FeaturedCollection collection={featuredCollection} />;
};
