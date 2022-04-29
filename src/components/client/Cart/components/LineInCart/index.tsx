// React
import {FC} from 'react';

// Packages
import {
  CartLineImage,
  CartLinePrice,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  Link,
  useCartLine,
} from '@shopify/hydrogen/client';

// Components
import {CartItemQuantity} from '..';

// Styles
import {
  OuterContainerStyles,
  CartLineImageStyles,
  InnerContainerOneStyles,
  InnerContainerTwoStyles,
  InnerContainerThreeStyles,
  LinkStyles,
  CartLinePriceStyles,
  CartLineProductTitleStyles,
  CartLineQuantityAdjustButtonStyles,
  SvgStyles,
  ListStyles,
} from './styles';

export const LineInCart: FC = () => {
  const {merchandise} = useCartLine();
  return (
    <div role="row" className={OuterContainerStyles}>
      <div role="cell" className={InnerContainerOneStyles}>
        <Link to={`/products/${merchandise.product.handle}`}>
          <CartLineImage
            className={CartLineImageStyles}
            options={{width: '98', height: '98', crop: 'center'}}
          />
        </Link>
      </div>
      <div role="cell" className={InnerContainerTwoStyles}>
        <Link
          to={`/products/${merchandise.product.handle}`}
          className={LinkStyles}
        >
          <CartLineProductTitle className={CartLineProductTitleStyles} />
        </Link>
        <ul className={ListStyles}>
          {merchandise.selectedOptions.map(({name, value}) => (
            <li key={name}>
              {name}: {value}
            </li>
          ))}
        </ul>
        <CartItemQuantity />
      </div>
      <div role="cell" className={InnerContainerThreeStyles}>
        <CartLineQuantityAdjustButton
          adjust="remove"
          aria-label="Remove from cart"
          className={CartLineQuantityAdjustButtonStyles}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={SvgStyles}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </CartLineQuantityAdjustButton>
        <CartLinePrice className={CartLinePriceStyles} />
      </div>
    </div>
  );
};
