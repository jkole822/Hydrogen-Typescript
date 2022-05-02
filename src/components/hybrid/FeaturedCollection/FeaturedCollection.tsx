// React
import {FC} from 'react';

// Packages
import {Image, Link} from '@shopify/hydrogen';

// Styles
import {
  OuterContainerStyles,
  InnerContainerStyles,
  HeadlineStyles,
  ParagraphStyles,
  LinkStyles,
} from './styles';

// Types
import {FeaturedCollectionProps} from './types';

/**
 * A shared component that defines a single featured collection to display on a storefront
 */
export const FeaturedCollection: FC<FeaturedCollectionProps> = ({
  collection,
}) => {
  return collection ? (
    <div className={OuterContainerStyles}>
      {collection.image ? (
        <Image
          width="622"
          height="465"
          //@ts-ignore
          data={collection.image}
        />
      ) : null}
      <div className={InnerContainerStyles}>
        <h2 className={HeadlineStyles}>{collection.title}</h2>
        <p className={ParagraphStyles}>{collection.description}</p>
        <Link to={`/collections/${collection.handle}`} className={LinkStyles}>
          Shop Collection
        </Link>
      </div>
    </div>
  ) : null;
};
