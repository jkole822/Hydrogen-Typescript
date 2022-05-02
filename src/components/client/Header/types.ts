interface Collection {
  id: string;
  handle: string;
}

export interface HeaderProps {
  collections: Collection[];
  storeName: string;
}
