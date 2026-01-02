import { Movie, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'NOVIDADES', href: '/category/novidades' },
  { label: 'AVENTURA', href: '/category/aventura' },
  { label: 'CLÁSSICO/ÉPICO', href: '/category/classico-epico' },
  { label: 'FAROESTE', href: '/category/faroeste' },
  { label: 'GUERRA', href: '/category/guerra' },
  { label: 'NOIR/POLICIAL/CRIME', href: '/category/noir-policial-crime' },
  { label: 'OUTROS GÊNEROS', href: '/category/outros' },
  { label: 'ATORES', href: '/category/atores' },
  { label: 'DIRETORES', href: '/category/diretores' },
];

export const MOVIES: Movie[] = [
  {
    id: 1,
    title: "BALAS QUE NÃO ERRAM",
    originalTitle: "No Name on the Bullet",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western1/300/450",
    tags: ["Colorido", "Áudio em Inglês e Português", "Legendado", "Qualidade Excelente"],
    category: "Faroeste",
    year: "1959",
    description: "Um pistoleiro contratado chega a uma pequena cidade do oeste, e sua mera presença causa pânico entre os habitantes, pois cada um deles tem um segredo ou um inimigo que poderia querer vê-lo morto. Enquanto ele espera calmamente, a paranoia da cidade cresce, revelando a verdadeira natureza de seus cidadãos."
  },
  {
    id: 2,
    title: "TERRA SAGRADA",
    originalTitle: "Sacred Ground",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western2/300/450",
    tags: ["Colorido", "Dublado", "Sem Legenda", "Qualidade Excelente"],
    category: "Faroeste",
    year: "1983",
    description: "Um homem das montanhas e sua esposa nativa americana lutam para proteger seu lar sagrado contra a invasão de colonos e as tensões culturais da época. Uma história emocionante sobre respeito, tradição e a luta pela terra."
  },
  {
    id: 3,
    title: "MASSACRE TRAIÇOEIRO",
    originalTitle: "Santa Fe Passage",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western3/300/450",
    tags: ["Colorido", "Dublado", "Legendado", "Qualidade Excelente"],
    category: "Faroeste",
    year: "1955",
    description: "Um batedor veterano que odeia os índios é contratado para guiar uma caravana de armas através do território indígena perigoso. Durante a jornada, ele deve confrontar seus próprios preconceitos e um passado traumático enquanto tenta manter todos vivos."
  },
  {
    id: 4,
    title: "O ÚLTIMO PÔR DO SOL",
    originalTitle: "The Last Sunset",
    price: 8.00,
    imageUrl: "https://picsum.photos/seed/western4/300/450",
    tags: ["Colorido", "Legendado", "Clássico"],
    category: "Faroeste",
    year: "1961",
    description: "Brendan O'Malley chega ao rancho de uma antiga paixão, Belle Breckenridge, fugindo da lei. O xerife Dana Stribling, que o persegue por motivos pessoais, chega logo depois. O destino os une em uma longa jornada de condução de gado, onde tensões antigas e novas paixões explodem."
  },
  {
    id: 5,
    title: "RIO VERMELHO",
    originalTitle: "Red River",
    price: 9.50,
    imageUrl: "https://picsum.photos/seed/western5/300/450",
    tags: ["Preto e Branco", "Legendado", "John Wayne"],
    category: "Faroeste",
    year: "1948",
    description: "Thomas Dunson, um rancheiro tirânico, lidera uma perigosa condução de gado do Texas ao Missouri. Seu estilo de liderança brutal causa um motim liderado por seu filho adotivo, Matt Garth. Um clássico absoluto do gênero que explora a relação pai e filho em meio à adversidade."
  },
  {
    id: 6,
    title: "SETE HOMENS E UM DESTINO",
    originalTitle: "The Magnificent Seven",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/western6/300/450",
    tags: ["Colorido", "Dublado", "Clássico Absoluto"],
    category: "Faroeste",
    year: "1960",
    description: "Um vilarejo mexicano aterrorizado por bandidos contrata sete pistoleiros americanos para protegê-los. Apesar de estarem em menor número, os sete homens preparam os camponeses para a batalha de suas vidas. Um remake ocidental dos Sete Samurais."
  }
];