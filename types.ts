export interface Movie {
  id: number;
  title: string;
  originalTitle?: string;
  price: number;
  imageUrl: string;
  tags: string[];
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
}