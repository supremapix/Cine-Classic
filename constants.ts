import { Movie, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'NOVIDADES', href: '#' },
  { label: 'AVENTURA', href: '#' },
  { label: 'CLÁSSICO/ÉPICO', href: '#' },
  { label: 'FAROESTE', href: '#' },
  { label: 'GUERRA', href: '#' },
  { label: 'NOIR/POLICIAL/CRIME', href: '#' },
  { label: 'OUTROS GÊNEROS', href: '#' },
  { label: 'ATORES', href: '#' },
  { label: 'DIRETORES', href: '#' },
];

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "BALAS QUE NÃO ERRAM",
    originalTitle: "No Name on the Bullet",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western1/300/450",
    tags: ["Colorido", "Áudio em Inglês e Português", "Legendado", "Qualidade Excelente"],
    category: "Faroeste"
  },
  {
    id: 2,
    title: "TERRA SAGRADA",
    originalTitle: "Sacred Ground",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western2/300/450",
    tags: ["Colorido", "Dublado", "Sem Legenda", "Qualidade Excelente"],
    category: "Faroeste"
  },
  {
    id: 3,
    title: "MASSACRE TRAIÇOEIRO",
    originalTitle: "Santa Fe Passage",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western3/300/450",
    tags: ["Colorido", "Dublado", "Legendado", "Qualidade Excelente"],
    category: "Faroeste"
  },
  {
    id: 4,
    title: "O ÚLTIMO PÔR DO SOL",
    originalTitle: "The Last Sunset",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western4/300/450",
    tags: ["Colorido", "Legendado", "Clássico"],
    category: "Faroeste"
  },
  {
    id: 5,
    title: "RIO VERMELHO",
    originalTitle: "Red River",
    price: 9.50,
    imageUrl: "https://picsum.photos/seed/western5/300/450",
    tags: ["Preto e Branco", "Legendado", "John Wayne"],
    category: "Faroeste"
  },
  {
    id: 6,
    title: "SETE HOMENS E UM DESTINO",
    originalTitle: "The Magnificent Seven",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/western6/300/450",
    tags: ["Colorido", "Dublado", "Clássico Absoluto"],
    category: "Faroeste"
  }
];