// React
import {FC, Suspense} from 'react';

import {
  useShop,
  useShopQuery,
  flattenConnection,
  LocalizationProvider,
  CacheHours,
} from '@shopify/hydrogen';

// Components
import {Cart} from '@/components/client/Cart/';
import Footer from '@/components/server/Footer/index.server';
import {Header} from '@/components/client/Header';

// GraphQL
import {LAYOUT_CONTENT} from '@/lib/graphQL';

// Styles
import {
  OuterContainerStyles,
  LinkStyles,
  InnerContainerStyles,
  MainStyles,
  ChildrenContainerStyles,
} from './styles';

// Types
import {LayoutProps} from './types';

/**
 * A server component that defines a structure and organization of a page that can be used in different parts of the Hydrogen app
 */
const Layout: FC<LayoutProps> = ({children, hero}) => {
  const {languageCode} = useShop();

  const {data}: any = useShopQuery({
    query: LAYOUT_CONTENT,
    variables: {
      language: languageCode,
      numCollections: 3,
    },
    cache: CacheHours(),
    preload: '*',
  });
  const collections = data ? flattenConnection(data.collections) : null;
  const products = data ? flattenConnection(data.products) : null;
  const storeName = data ? data.shop.name : '';

  return (
    <LocalizationProvider preload="*">
      <div className={OuterContainerStyles}>
        <a href="#mainContent" className={LinkStyles}>
          Skip to content
        </a>
      </div>
      <div className={InnerContainerStyles}>
        {/* TODO: Find out why Suspense needs to be here to prevent hydration errors. */}
        <Suspense fallback={null}>
          <Header
            //@ts-ignore
            collections={collections}
            storeName={storeName}
          />
          <Cart />
        </Suspense>
        <main role="main" id="mainContent" className={MainStyles}>
          {hero}
          <div className={ChildrenContainerStyles}>
            <Suspense fallback={null}>{children}</Suspense>
          </div>
        </main>
        <Footer
          //@ts-ignore
          collection={collections?.[0]}
          //@ts-ignore
          product={products?.[0]}
        />
      </div>
    </LocalizationProvider>
  );
};

export default Layout;
