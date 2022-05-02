// React
import {FC, Fragment, useEffect} from 'react';

// Packages
import {Link} from '@shopify/hydrogen/client';
import {FocusTrap} from '@headlessui/react';

// Components
import {MobileCountrySelector} from '@/components/client/MobileCountrySelector';
import OpenIcon from '@/components/hybrid/OpenIcon';
import {ArrowRightIcon, CloseIcon} from './components';

// Styles
import { OuterContainerStyles, ButtonStyles, SrOnlyStyles, InnerContainerStyles, ListStyles, LinkStyles, ArrowRightIconStyles } from './styles';{} from './styles'

// Types
import {MobileNavigationProps} from './types';

let scrollPosition = 0;

/**
 * A client component that defines the navigation for a mobile storefront
 */
export const MobileNavigation: FC<MobileNavigationProps> = ({
  collections,
  isOpen,
  setIsOpen,
}) => {
  const OpenFocusTrap = isOpen ? FocusTrap : Fragment;

  useEffect(() => {
    if (isOpen) {
      scrollPosition = window.scrollY;
      document.body.style.position = 'fixed';
    } else if (document.body.style.position) {
      document.body.style.position = '';
      window.scrollTo(0, scrollPosition);
    }
  }, [isOpen]);

  return (
    <div className={OuterContainerStyles}>
      <OpenFocusTrap>
        <button
          type="button"
          className={ButtonStyles}
          onClick={() =>
            setIsOpen((previousIsOpen: boolean) => !previousIsOpen)
          }
        >
          <span className={SrOnlyStyles}>{isOpen ? 'Close' : 'Open'} Menu</span>
          {isOpen ? <CloseIcon /> : <OpenIcon />}
        </button>
        {isOpen ? (
          <div className="">
            <ul>
              {collections.map((collection) => (
                <li className={ListStyles} key={collection.id}>
                  <Link
                    className={LinkStyles}
                    to={`/collections/${collection.handle}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {collection?.title}
                    <ArrowRightIcon className={ArrowRightIconStyles} />
                  </Link>
                </li>
              ))}
            </ul>
            <MobileCountrySelector />
          </div>
        ) : null}
      </OpenFocusTrap>
    </div>
  );
};
