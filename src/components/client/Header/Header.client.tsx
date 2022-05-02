// React
import {FC, useEffect, useState} from 'react';

// Packages
import {Link} from '@shopify/hydrogen/client';

// Components
import {CartToggle} from '@/components/client/CartToggle';
import {useCartUI} from '@/lib/context/CartUIProvider.client';
import {CountrySelector} from '@/components/client/CountrySelector';
import Navigation from '@/components/client/Navigation.client';
import MobileNavigation from '@/components/client/MobileNavigation.client';

// Styles
import {
  HeaderStyles,
  OuterContainerStyles,
  InnerContainerStyles,
  ContentWrapper,
  LinkStyles,
} from './styles';

// Types
import {HeaderProps} from './types';

/**
 * A client component that specifies the content of the header on the website
 */
export const Header: FC<HeaderProps> = ({collections, storeName}) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const {isCartOpen} = useCartUI();

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    setScrollbarWidth(scrollbarWidth);
  }, [isCartOpen]);

  return (
    <header className={HeaderStyles} role="banner">
      <div className={OuterContainerStyles(isMobileNavOpen)}>
        <div
          className={InnerContainerStyles}
          style={{
            paddingRight: isCartOpen ? scrollbarWidth : 0,
          }}
        >
          <div className={ContentWrapper}>
            <CountrySelector />
            <MobileNavigation
              collections={collections}
              isOpen={isMobileNavOpen}
              setIsOpen={setIsMobileNavOpen}
            />
            <Link className={LinkStyles} to="/">
              {storeName}
            </Link>
            <CartToggle
              handleClick={() => {
                if (isMobileNavOpen) setIsMobileNavOpen(false);
              }}
            />
          </div>
          <Navigation collections={collections} storeName={storeName} />
        </div>
      </div>
    </header>
  );
};
