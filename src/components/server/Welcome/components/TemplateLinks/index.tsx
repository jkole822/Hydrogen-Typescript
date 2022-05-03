// React
import {FC} from 'react';

// Packages
import {
  useShop,
  useShopQuery,
  flattenConnection,
  Link,
} from '@shopify/hydrogen';

// GraphQL
import {WELCOME_CONTENT} from '@/lib/graphQL';

// Styles
import {
  OuterContainerStyles,
  ParagraphStyles,
  LinkStyles,
  ListStyles,
} from './styles';

export const TemplateLinks: FC = () => {
  const {languageCode} = useShop();

  const {data}: any = useShopQuery({
    query: WELCOME_CONTENT,
    variables: {language: languageCode},
    preload: true,
  });
  const products = data && flattenConnection(data.products);
  const collections = data && flattenConnection(data.collections);

  const firstProduct = products && products.length ? products[0].handle : '';
  const firstCollection = collections[0] ? collections[0].handle : '';

  return (
    <div className={OuterContainerStyles}>
      <p className={ParagraphStyles}>Explore the templates</p>
      <ul>
        <li className={ListStyles}>
          <Link to={`/collections/${firstCollection}`} className={LinkStyles}>
            Collection template
          </Link>
        </li>
        <li className={ListStyles}>
          <Link to={`/products/${firstProduct}`} className={LinkStyles}>
            Product template
          </Link>
        </li>
        <li>
          <Link to="/error-page" className={LinkStyles}>
            404 template
          </Link>
        </li>
      </ul>
    </div>
  );
};
