// React
import {FC} from 'react';

// Packages
import {useProduct, MediaFile, Image} from '@shopify/hydrogen/client';

// Styles
import {ImageStyles, OuterContainerStyles, MediaFileStyles} from './styles';

const MODEL_3D_TYPE = 'MODEL_3D';
const MODEL_3D_PROPS = {
  interactionPromptThreshold: '0',
};
const VIDEO_TYPE = 'VIDEO';
const EXTERNAL_VIDEO_TYPE = 'EXTERNAL_VIDEO';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */
export const Gallery: FC = () => {
  const {media, selectedVariant} = useProduct();

  const featuredMedia = selectedVariant?.image || media[0]?.image;
  const featuredMediaSrc = featuredMedia?.url.split('?')[0];
  const galleryMedia = media.filter((med: any) => {
    if (
      med.mediaContentType === MODEL_3D_TYPE ||
      med.mediaContentType === VIDEO_TYPE ||
      med.mediaContentType === EXTERNAL_VIDEO_TYPE
    ) {
      return true;
    }

    return !med.image.url.includes(featuredMediaSrc);
  });

  if (!media.length) {
    return null;
  }

  return (
    <div
      className={OuterContainerStyles}
      //@ts-ignore
      tabIndex="-1"
    >
      <Image
        className={ImageStyles}
        //@ts-ignore
        data={selectedVariant?.image}
        fetchpriority="high"
      />
      {galleryMedia.map((med: any) => {
        let extraProps = {};

        if (med.mediaContentType === MODEL_3D_TYPE) {
          extraProps = MODEL_3D_PROPS;
        }

        return (
          <MediaFile
            //@ts-ignore
            className={MediaFileStyles}
            data={med}
            fetchpriority="low"
            key={med.id || med.image.id}
            options={{
              height: '485',
              crop: 'center',
            }}
            //@ts-ignore
            tabIndex="0"
            {...extraProps}
          />
        );
      })}
    </div>
  );
};
