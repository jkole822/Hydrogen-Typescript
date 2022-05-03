// React
import {FC} from 'react';

// Packages
import {
  flattenConnection,
  useParsedMetafields,
  ProductProvider,
  ProductTitle,
  ProductDescription,
} from '@shopify/hydrogen/client';

// Components
import {ProductOptions} from '@/components/client/ProductOptions';
import {Gallery} from '@/components/client/Gallery';
import {AddToCartMarkup, ProductPrices, SizeChart} from './components';

// Styles
import {
  InnerContainerStyles,
  InnerContainerStylesTwo,
  OuterContainerStyles,
  ProductDescriptionStyles,
  ProductOptionsContainerStyles,
  ProductOptionsInnerContainerStyles,
  ProductPricesStyles,
  ProductTitleStyles,
  ProductTitleStylesTwo,
  ProductVendorStyles,
  SizeChartStyles,
  SizeChartTwoStyles,
  SpanOneStyles,
  SpanTwoStyles,
} from './styles';

// Types
import {ProductDetailsProps} from './types';

export const ProductDetails: FC<ProductDetailsProps> = ({product}) => {
  const initialVariant = flattenConnection(product.variants)[0];
  const productMetafields = useParsedMetafields(product.metafields);
  const sizeChartMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'size_chart',
  );
  const sustainableMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' && metafield.key === 'sustainable',
  );
  const lifetimeWarrantyMetafield = productMetafields.find(
    (metafield) =>
      metafield.namespace === 'my_fields' &&
      metafield.key === 'lifetime_warranty',
  );

  return (
    <>
      <ProductProvider
        data={product}
        //@ts-ignore
        initialVariantId={initialVariant?.id}
      >
        <div className={OuterContainerStyles}>
          <div className={InnerContainerStyles}>
            <ProductTitle as="h1" className={ProductTitleStyles} />
            {product.vendor && (
              <div className={ProductVendorStyles}>{product.vendor}</div>
            )}
            <span />
            <div className={ProductPricesStyles}>
              <ProductPrices />
            </div>
          </div>

          <Gallery />

          <div>
            <div className={InnerContainerStylesTwo}>
              <ProductTitle as="h1" className={ProductTitleStylesTwo} />
              {product.vendor && (
                <div className={ProductVendorStyles}>{product.vendor}</div>
              )}
              <ProductPrices />
            </div>
            {/* Product Options */}
            <div className={ProductOptionsContainerStyles}>
              <ProductOptions />
              {sizeChartMetafield?.value && (
                <a href="#size-chart" className={SizeChartStyles}>
                  Size Chart
                </a>
              )}
              <AddToCartMarkup />
              <div className={ProductOptionsInnerContainerStyles}>
                {sustainableMetafield?.value && (
                  <span className={SpanOneStyles}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current text-blue-600 mr-3"
                    >
                      <path
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.7071-.7071M6.34315 6.34315l-.70711-.70711m12.72796.00005-.7071.70711M6.3432 17.6569l-.70711.7071M16 12c0 2.2091-1.7909 4-4 4-2.20914 0-4-1.7909-4-4 0-2.20914 1.79086-4 4-4 2.2091 0 4 1.79086 4 4Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={SpanTwoStyles}>Sustainable Material</span>
                  </span>
                )}
                {lifetimeWarrantyMetafield?.value && (
                  <span className={SpanOneStyles}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-current text-blue-600 mr-3"
                    >
                      <path
                        d="M9 12L11 14L15 10M20.6179 5.98434C20.4132 5.99472 20.2072 5.99997 20 5.99997C16.9265 5.99997 14.123 4.84453 11.9999 2.94434C9.87691 4.84446 7.07339 5.99985 4 5.99985C3.79277 5.99985 3.58678 5.9946 3.38213 5.98422C3.1327 6.94783 3 7.95842 3 9.00001C3 14.5915 6.82432 19.2898 12 20.622C17.1757 19.2898 21 14.5915 21 9.00001C21 7.95847 20.8673 6.94791 20.6179 5.98434Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={SpanTwoStyles}>Lifetime Warranty</span>
                  </span>
                )}
              </div>
            </div>
            {/* Product Description */}
            <ProductDescription className={ProductDescriptionStyles} />
            {sizeChartMetafield?.value && (
              <div className={SizeChartTwoStyles}>
                <SizeChart />
              </div>
            )}
          </div>
        </div>
      </ProductProvider>
    </>
  );
};
