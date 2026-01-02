export interface Movie {
  id: number;
  title: string;
  originalTitle?: string;
  price: number;
  imageUrl: string;
  tags: string[];
  category: string;
  description?: string;
  year?: string;
}

export interface NavItem {
  label: string;
  href: string;
}