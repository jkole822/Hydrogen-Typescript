// React
import {FC} from 'react';

// Packages
import {useShop, useShopQuery, Seo} from '@shopify/hydrogen';

// Components
import Layout from '@/components/server/Layout/index.server';
import NotFound from '@/components/server/NotFound/index.server';

// GraphQL
import {PAGE_DETAILS} from '@/lib/graphQL';

// Styles
import {HeadlineStyles, ContainerStyles} from './styles';

// Types
import {PageProps} from './types';

const Page: FC<PageProps> = ({params}) => {
  const {languageCode} = useShop();

  const {handle} = params;
  const {data}: any = useShopQuery({
    query: PAGE_DETAILS,
    variables: {language: languageCode, handle},
  });

  if (!data.pageByHandle) {
    return <NotFound />;
  }

  const page = data.pageByHandle;

  return (
    <Layout>
      <Seo type="page" data={page} />
      <h1 className={HeadlineStyles}>{page.title}</h1>
      <div
        dangerouslySetInnerHTML={{__html: page.body}}
        className={ContainerStyles}
      />
    </Layout>
  );
};

export default Page;
