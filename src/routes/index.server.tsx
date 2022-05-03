// React
import {FC, Suspense} from 'react';

// Components
import {Layout} from '@/components/server/Layout/index.server';
import {Welcome} from '@/components/server/Welcome/index.server';
import {
  GradientBackground,
  SeoForHomepage,
  BoxFallback,
  FeaturedCollectionBox,
  FeaturedProductsBox,
} from './components';

// Styles
import {ContainerStyles} from './styles';

// Types
import {IndexProps} from './types';

const Index: FC<IndexProps> = ({country = {isoCode: 'US'}}) => {
  return (
    <Layout hero={<GradientBackground />}>
      <Suspense fallback={null}>
        <SeoForHomepage />
      </Suspense>
      <div className={ContainerStyles}>
        <Welcome />
        <Suspense fallback={<BoxFallback />}>
          <FeaturedProductsBox country={country} />
        </Suspense>
        <Suspense fallback={<BoxFallback />}>
          <FeaturedCollectionBox country={country} />
        </Suspense>
      </div>
    </Layout>
  );
};

export default Index;
