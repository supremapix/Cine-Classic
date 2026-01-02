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
  director?: string;
  cast?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}