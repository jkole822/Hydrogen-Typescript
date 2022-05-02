interface Collection {
  description: string;
  handle: string;
  image: string;
  title: string;
}

export interface FeaturedCollectionProps {
  collection: Collection;
}
