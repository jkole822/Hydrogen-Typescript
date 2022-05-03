// Packages
import {flattenConnection} from '@shopify/hydrogen';

// Helpers
import {renderUrlTag} from './renderUrlTag';

export const shopSitemap = (data: any, baseUrl: string) => {
  const productsData = flattenConnection(data.products).map((product: any) => {
    const url = product.onlineStoreUrl
      ? product.onlineStoreUrl
      : `${baseUrl}/products/${product.handle}`;

    const finalObject = {
      url,
      lastMod: product.updatedAt,
      changeFreq: 'daily',
      image: {
        url: '',
        title: '',
        caption: '',
      },
    };

    if (product.featuredImage.url) {
      finalObject.image = {
        url: product.featuredImage.url,
        title: '',
        caption: '',
      };

      if (product.title) {
        finalObject.image.title = product.title;
      }

      if (product.featuredImage.altText) {
        finalObject.image.caption = product.featuredImage.altText;
      }

      return finalObject;
    }
  });

  const collectionsData = flattenConnection(data.collections).map(
    (collection: any) => {
      const url = collection.onlineStoreUrl
        ? collection.onlineStoreUrl
        : `${baseUrl}/collections/${collection.handle}`;

      return {
        url,
        lastMod: collection.updatedAt,
        changeFreq: 'daily',
      };
    },
  );

  const pagesData = flattenConnection(data.pages).map((page: any) => {
    const url = page.onlineStoreUrl
      ? page.onlineStoreUrl
      : `${baseUrl}/pages/${page.handle}`;

    return {
      url,
      lastMod: page.updatedAt,
      changeFreq: 'weekly',
    };
  });

  const urlsDatas = [...productsData, ...collectionsData, ...pagesData];

  return `
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    >
      ${urlsDatas.map((url) => (url ? renderUrlTag(url) : '')).join('')}
      })}
    </urlset>`;
};
