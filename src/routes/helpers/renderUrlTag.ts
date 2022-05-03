// Types
import {RenderUrlTagProps} from '../types';

export const renderUrlTag = ({
  url,
  lastMod,
  changeFreq,
  image,
}: RenderUrlTagProps): string => {
  return `
      <url>
        <loc>${url}</loc>
        <lastmod>${lastMod}</lastmod>
        <changefreq>${changeFreq}</changefreq>
        ${
          image
            ? `
          <image:image>
            <image:loc>${image.url}</image:loc>
            <image:title>${image.title ?? ''}</image:title>
            <image:caption>${image.caption ?? ''}</image:caption>
          </image:image>`
            : ''
        }
      </url>
    `;
};
