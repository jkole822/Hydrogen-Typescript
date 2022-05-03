// React
import {FC, Suspense} from 'react';

// Packages
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  Router,
  Route,
  FileRoutes,
  ShopifyProvider,
  CookieSessionStorage,
} from '@shopify/hydrogen';

// Components
import {DefaultSeo} from '@/components/server/DefaultSeo.server';
import {NotFound} from '@/components/server/NotFound/index.server';
import {LoadingFallback} from '@/components/hybrid/LoadingFallback';

// Config
import shopifyConfig from '../shopify.config';

// Context
import {CartProvider} from '@/lib/context';

// Types
import {AppProps} from './types';

const App: FC<AppProps> = ({routes}) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ShopifyProvider shopifyConfig={shopifyConfig}>
        <CartProvider>
          <DefaultSeo />
          <Router>
            <FileRoutes routes={routes} />
            <Route path="*" page={<NotFound />} />
          </Router>
        </CartProvider>
      </ShopifyProvider>
    </Suspense>
  );
};

//@ts-ignore
const routes = import.meta.globEager('./routes/**/*.server.[jt](s|sx)');

export default renderHydrogen(App, {
  routes,
  shopifyConfig,
  session: CookieSessionStorage('__session', {
    path: '/',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
    maxAge: 60 * 60 * 24 * 30,
  }),
});
