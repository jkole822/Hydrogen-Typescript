interface Collection {
  id: string;
  handle: string;
  title: string;
}

export interface NavigationProps {
  collections: Collection[];
}
