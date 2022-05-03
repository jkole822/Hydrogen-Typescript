interface Country {
  isoCode: string;
}

interface Params {
  handle: string;
}

export interface CollectionProps {
  country: Country;
  collectionProductCount?: number;
  params: Params;
}
