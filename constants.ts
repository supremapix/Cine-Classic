import { Movie, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'NOVIDADES', href: '/category/novidades' },
  { label: 'AVENTURA', href: '/category/aventura' },
  { label: 'CLÁSSICO/ÉPICO', href: '/category/classico-epico' },
  { label: 'FAROESTE', href: '/category/faroeste' },
  { label: 'GUERRA', href: '/category/guerra' },
  { label: 'NOIR/POLICIAL', href: '/category/noir-policial-crime' },
  { label: 'OUTROS', href: '/category/outros' },
];

// Gerador de filmes para popular o catálogo
export const MOVIES: Movie[] = [
  // --- FAROESTE ---
  {
    id: 1,
    title: "TRÊS HOMENS EM CONFLITO",
    originalTitle: "The Good, the Bad and the Ugly",
    price: 15.00,
    imageUrl: "https://picsum.photos/seed/western1/300/450",
    tags: ["Colorido", "Clássico", "Sergio Leone"],
    category: "Faroeste",
    year: "1966",
    director: "Sergio Leone",
    cast: ["Clint Eastwood", "Lee Van Cleef", "Eli Wallach"],
    description: "Durante a Guerra Civil Americana, três pistoleiros rivais - o Bom, o Mau e o Feio - formam alianças instáveis e traem uns aos outros em uma busca implacável por um tesouro de ouro confederado enterrado em um cemitério."
  },
  {
    id: 2,
    title: "RASTROS DE ÓDIO",
    originalTitle: "The Searchers",
    price: 12.00,
    imageUrl: "https://picsum.photos/seed/western2/300/450",
    tags: ["Colorido", "John Wayne", "Obra-prima"],
    category: "Faroeste",
    year: "1956",
    director: "John Ford",
    cast: ["John Wayne", "Jeffrey Hunter", "Vera Miles"],
    description: "Ethan Edwards, um veterano da Guerra Civil, embarca em uma jornada de anos para resgatar sua sobrinha sequestrada pelos Comanches. Uma história profunda sobre obsessão, racismo e redenção no oeste selvagem."
  },
  {
    id: 3,
    title: "ERA UMA VEZ NO OESTE",
    originalTitle: "Once Upon a Time in the West",
    price: 14.00,
    imageUrl: "https://picsum.photos/seed/western3/300/450",
    tags: ["Colorido", "Ennio Morricone", "Épico"],
    category: "Faroeste",
    year: "1968",
    director: "Sergio Leone",
    cast: ["Henry Fonda", "Charles Bronson", "Claudia Cardinale"],
    description: "Uma misteriosa harmônica toca enquanto um estranho busca vingança contra um assassino implacável em uma batalha pela posse de terras ferroviárias. Um marco visual e sonoro do cinema."
  },
  {
    id: 4,
    title: "RIO BRAVO",
    originalTitle: "Rio Bravo",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/western4/300/450",
    tags: ["Colorido", "Howard Hawks", "Ação"],
    category: "Faroeste",
    year: "1959",
    director: "Howard Hawks",
    cast: ["John Wayne", "Dean Martin", "Ricky Nelson"],
    description: "Um xerife de uma pequena cidade no oeste americano deve impedir que um poderoso rancheiro resgate seu irmão da prisão, contando apenas com a ajuda de um bêbado, um velho e um jovem pistoleiro."
  },
  {
    id: 5,
    title: "DJANGO",
    originalTitle: "Django",
    price: 12.00,
    imageUrl: "https://picsum.photos/seed/western5/300/450",
    tags: ["Colorido", "Spaghetti Western", "Cult"],
    category: "Faroeste",
    year: "1966",
    director: "Sergio Corbucci",
    cast: ["Franco Nero", "José Bódalo", "Loredana Nusciak"],
    description: "Um pistoleiro solitário arrastando um caixão chega a uma cidade enlameada apanhada em uma disputa violenta entre a KKK e bandidos mexicanos. Violento e estilizado, definiu o gênero."
  },

  // --- GUERRA ---
  {
    id: 6,
    title: "OS DOZE CONDENADOS",
    originalTitle: "The Dirty Dozen",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/war1/300/450",
    tags: ["Colorido", "Ação", "Clássico"],
    category: "Guerra",
    year: "1967",
    director: "Robert Aldrich",
    cast: ["Lee Marvin", "Ernest Borgnine", "Charles Bronson"],
    description: "Um major rebelde do exército americano é designado para treinar uma dúzia de assassinos condenados para uma missão suicida atrás das linhas inimigas antes do Dia D."
  },
  {
    id: 7,
    title: "A PONTE DO RIO KWAI",
    originalTitle: "The Bridge on the River Kwai",
    price: 12.00,
    imageUrl: "https://picsum.photos/seed/war2/300/450",
    tags: ["Colorido", "Oscar", "Épico"],
    category: "Guerra",
    year: "1957",
    director: "David Lean",
    cast: ["William Holden", "Alec Guinness", "Jack Hawkins"],
    description: "Prisioneiros de guerra britânicos são forçados a construir uma ponte ferroviária para seus captores japoneses, enquanto um comando aliado planeja destruí-la."
  },
  {
    id: 8,
    title: "APOCALYPSE NOW",
    originalTitle: "Apocalypse Now",
    price: 15.00,
    imageUrl: "https://picsum.photos/seed/war3/300/450",
    tags: ["Colorido", "Psicológico", "Vietnã"],
    category: "Guerra",
    year: "1979",
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Martin Sheen", "Robert Duvall"],
    description: "Durante a Guerra do Vietnã, o Capitão Willard é enviado em uma missão perigosa para o Camboja para assassinar um Coronel renegado que se estabeleceu como um deus entre uma tribo local."
  },

  // --- NOIR / POLICIAL ---
  {
    id: 9,
    title: "RELÍQUIA MACABRA",
    originalTitle: "The Maltese Falcon",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/noir1/300/450",
    tags: ["Preto e Branco", "Humphrey Bogart", "Detetive"],
    category: "Noir/Policial/Crime",
    year: "1941",
    director: "John Huston",
    cast: ["Humphrey Bogart", "Mary Astor", "Gladys George"],
    description: "O detetive particular Sam Spade se envolve em uma caça perigosa por uma estatueta inestimável, lidando com uma galeria de criminosos excêntricos e uma femme fatale mentirosa."
  },
  {
    id: 10,
    title: "PACTO DE SANGUE",
    originalTitle: "Double Indemnity",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/noir2/300/450",
    tags: ["Preto e Branco", "Suspense", "Noir"],
    category: "Noir/Policial/Crime",
    year: "1944",
    director: "Billy Wilder",
    cast: ["Fred MacMurray", "Barbara Stanwyck", "Edward G. Robinson"],
    description: "Um vendedor de seguros se deixa seduzir por uma esposa manipuladora e planeja o assassinato do marido dela para receber o dinheiro de uma apólice de seguro de acidentes."
  },
  {
    id: 11,
    title: "PERDIGUEIRO",
    originalTitle: "Dirty Harry",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/noir3/300/450",
    tags: ["Colorido", "Policial", "Clint Eastwood"],
    category: "Noir/Policial/Crime",
    year: "1971",
    director: "Don Siegel",
    cast: ["Clint Eastwood", "Harry Guardino", "Reni Santoni"],
    description: "Harry Callahan, um inspetor durão de São Francisco, persegue um assassino em série psicopata conhecido como Scorpio, que aterroriza a cidade."
  },

  // --- CLÁSSICO / ÉPICO ---
  {
    id: 12,
    title: "BEN-HUR",
    originalTitle: "Ben-Hur",
    price: 14.00,
    imageUrl: "https://picsum.photos/seed/epic1/300/450",
    tags: ["Colorido", "Bíblico", "Oscar"],
    category: "Classico-Epico",
    year: "1959",
    director: "William Wyler",
    cast: ["Charlton Heston", "Jack Hawkins", "Stephen Boyd"],
    description: "Um príncipe judeu é traído e enviado para a escravidão por um amigo romano, mas recupera sua liberdade e volta para se vingar na arena de corrida de bigas."
  },
  {
    id: 13,
    title: "SPARTACUS",
    originalTitle: "Spartacus",
    price: 12.00,
    imageUrl: "https://picsum.photos/seed/epic2/300/450",
    tags: ["Colorido", "Histórico", "Roma"],
    category: "Classico-Epico",
    year: "1960",
    director: "Stanley Kubrick",
    cast: ["Kirk Douglas", "Laurence Olivier", "Jean Simmons"],
    description: "A história do escravo Spartacus, que lidera uma revolta violenta contra a decadente República Romana."
  },
  {
    id: 14,
    title: "E O VENTO LEVOU",
    originalTitle: "Gone with the Wind",
    price: 15.00,
    imageUrl: "https://picsum.photos/seed/epic3/300/450",
    tags: ["Colorido", "Romance", "Guerra Civil"],
    category: "Classico-Epico",
    year: "1939",
    director: "Victor Fleming",
    cast: ["Clark Gable", "Vivien Leigh", "Thomas Mitchell"],
    description: "Um romance épico ambientado na Guerra Civil Americana e na Reconstrução, focado na vida da petulante beldade do sul, Scarlett O'Hara."
  },

  // --- AVENTURA ---
  {
    id: 15,
    title: "INDIANA JONES E OS CAÇADORES DA ARCA PERDIDA",
    originalTitle: "Raiders of the Lost Ark",
    price: 12.00,
    imageUrl: "https://picsum.photos/seed/adv1/300/450",
    tags: ["Colorido", "Aventura", "Spielberg"],
    category: "Aventura",
    year: "1981",
    director: "Steven Spielberg",
    cast: ["Harrison Ford", "Karen Allen", "Paul Freeman"],
    description: "Em 1936, o arqueólogo e aventureiro Indiana Jones é contratado pelo governo dos EUA para encontrar a Arca da Aliança antes que os nazistas possam obter seus incríveis poderes."
  },
  {
    id: 16,
    title: "O TESOURO DE SIERRA MADRE",
    originalTitle: "The Treasure of the Sierra Madre",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/adv2/300/450",
    tags: ["Preto e Branco", "Humphrey Bogart", "Clássico"],
    category: "Aventura",
    year: "1948",
    director: "John Huston",
    cast: ["Humphrey Bogart", "Walter Huston", "Tim Holt"],
    description: "Fred Dobbs e Bob Curtin, dois americanos sem sorte no México, convencem um velho garimpeiro a ajudá-los a minerar ouro nas montanhas de Sierra Madre."
  },
  
   // --- OUTROS ---
   {
    id: 17,
    title: "CANTANDO NA CHUVA",
    originalTitle: "Singin' in the Rain",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/other1/300/450",
    tags: ["Colorido", "Musical", "Comédia"],
    category: "Outros",
    year: "1952",
    director: "Stanley Donen, Gene Kelly",
    cast: ["Gene Kelly", "Donald O'Connor", "Debbie Reynolds"],
    description: "Uma estrela do cinema mudo, seu parceiro e uma aspirante a atriz lidam com a difícil transição para o cinema falado na Hollywood dos anos 20."
  },
  {
    id: 18,
    title: "PSICOSE",
    originalTitle: "Psycho",
    price: 10.00,
    imageUrl: "https://picsum.photos/seed/other2/300/450",
    tags: ["Preto e Branco", "Terror", "Hitchcock"],
    category: "Outros",
    year: "1960",
    director: "Alfred Hitchcock",
    cast: ["Anthony Perkins", "Janet Leigh", "Vera Miles"],
    description: "Uma secretária em fuga rouba dinheiro de seu empregador e se hospeda em um motel isolado administrado por um jovem estranho e sua mãe dominadora."
  }
];