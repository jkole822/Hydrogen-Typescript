interface Product {
  handle: string;
  title: string;
  variants: any;
  vendor: string;
}

export interface ProductCardProps {
  product: Product;
}
