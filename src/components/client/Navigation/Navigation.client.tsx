// React
import {FC} from 'react';

// Packages
import {Link} from '@shopify/hydrogen/client';

// Styles
import {OuterContainerStyles, ListStyles, LinkStyles} from './styles';

// Types
import {NavigationProps} from './types';

/**
 * A client component that defines the navigation for a web storefront
 */
export const Navigation: FC<NavigationProps> = ({collections}) => {
  return (
    <nav className={OuterContainerStyles}>
      <ul className={ListStyles}>
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className={LinkStyles}
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
