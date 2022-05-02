interface Collection {
  id: string;
  handle: string;
  title: string;
}

export interface MobileNavigationProps {
  collections: Collection[];
  isOpen: boolean;
  setIsOpen: any;
}
