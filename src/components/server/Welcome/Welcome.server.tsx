// React
import {FC, Suspense} from 'react';

// Components
import {
  BoxFallback,
  DocsButton,
  StorefrontInfo,
  TemplateLinks,
} from './components';

// Styles
import {
  OuterContainerStyles,
  InnerContainerStyles,
  HeadlineStyles,
  ParagraphStyles,
  DocsContainerStyles,
  GridStyles,
} from './styles';

/**
 * A server component that displays the content on the homepage of the Hydrogen app
 */
export const Welcome: FC = () => {
  return (
    <div className={OuterContainerStyles}>
      <div className={InnerContainerStyles}>
        <h1 className={HeadlineStyles}>Hello, Hydrogen</h1>
        <p className={ParagraphStyles}>
          Welcome to your custom storefront. Let&rsquo;s get building.
        </p>
        <div className={DocsContainerStyles}>
          <DocsButton
            url="https://shopify.dev/custom-storefronts/hydrogen"
            label="Browse Hydrogen documentation"
          />
          <DocsButton url="/graphql" label="Open the GraphiQL explorer" />
          <DocsButton
            url="https://github.com/Shopify/hydrogen-examples"
            label="Explore Hydrogen examples"
          />
        </div>
      </div>
      <div className={GridStyles}>
        <Suspense fallback={<BoxFallback />}>
          <StorefrontInfo />
        </Suspense>
        <Suspense fallback={<BoxFallback />}>
          <TemplateLinks />
        </Suspense>
      </div>
    </div>
  );
};
