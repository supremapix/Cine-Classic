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
  // Novos campos detalhados
  specs?: {
    type: 'Colorido' | 'Preto e Branco';
    duration: string;
    country: string;
    studio?: string;
  };
  qualityRating?: 'Excelente' | 'Boa' | 'Regular';
  curiosities?: string;
  importance?: string;
}

export interface NavItem {
  label: string;
  href: string;
}