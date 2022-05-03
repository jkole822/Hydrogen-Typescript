// React
import {FC} from 'react';

// Packages
import {useShop, useShopQuery, flattenConnection} from '@shopify/hydrogen';

// Components
import {ExternalIcon} from '..';

// GraphQL
import {WELCOME_CONTENT} from '@/lib/graphQL';

// Styles
import {
  OuterContainerStyles,
  ParagraphStyles,
  HeadlineStyles,
  ParagraphTwoStyles,
  InnerContainerStyles,
  LinkStyles,
  LinkTwoStyles,
  SeparatorStyles,
} from './styles';

export const StorefrontInfo: FC = () => {
  const {languageCode} = useShop();

  const {data}: any = useShopQuery({
    query: WELCOME_CONTENT,
    variables: {language: languageCode},
    preload: true,
  });
  const shopName = data ? data.shop.name : '';
  const products = data && flattenConnection(data.products);
  const collections = data && flattenConnection(data.collections);
  const totalProducts = products && products.length;
  const totalCollections = collections && collections.length;

  const pluralize = (count: number, noun: string, suffix = 's') =>
    `${count} ${noun}${count === 1 ? '' : suffix}`;

  return (
    <div className={OuterContainerStyles}>
      <p className={ParagraphStyles}>Connected Storefront</p>
      <h2 className={HeadlineStyles}>{shopName}</h2>
      <p className={ParagraphTwoStyles}>
        {pluralize(totalProducts, 'Product')}
        {', '}
        {pluralize(totalCollections, 'Collection')}
      </p>
      {totalProducts === 0 && totalCollections === 0 && (
        <div className={InnerContainerStyles}>
          Use the{' '}
          <a
            href="https://shopify.dev/apps/tools/cli/getting-started"
            className={LinkStyles}
            target="_blank"
            rel="noreferrer"
          >
            Shopify CLI
          </a>{' '}
          to populate sample products and collections.
        </div>
      )}
      <hr className={SeparatorStyles} />
      <a
        href="https://shopify.dev/custom-storefronts/hydrogen/getting-started/create#step-2-update-information-about-your-shopify-storefront"
        className={LinkTwoStyles}
        target="_blank"
        rel="noreferrer"
      >
        Change your storefront access token
        <ExternalIcon />
      </a>
    </div>
  );
};
