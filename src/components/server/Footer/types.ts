interface Collection {
  id: string;
  handle: string;
  title: string;
}

interface Product {
  id: string;
  handle: string;
  title: string;
}

export interface FooterProps {
  collection: Collection;
  product: Product;
}
