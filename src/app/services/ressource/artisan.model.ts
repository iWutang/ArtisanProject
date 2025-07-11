export interface Artisan {
  id: number;
  name: string;
  specialty: string;
  note: number;
  location: string;
  about: string;
  email: string;
  website: string;
  category: string;
  top: boolean;
}

export const ARTISANS: Artisan[] = [
  {
    id: 1,
    name: 'Vallis Bellemare',
    specialty: 'Plombier',
    note: 4,
    location: 'Vienne',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'v.bellemare@gmail.com',
    website: 'https://plomberie-bellemare.com',
    category: 'Bâtiment',
    top: false,
  },
  {
    id: 2,
    name: 'Amitee Lécuyer',
    specialty: 'Couturier',
    note: 4.5,
    location: 'Annecy',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'a.amitee@hotmail.com',
    website: 'https://lecuyer-couture.com',
    category: 'Fabrication',
    top: false,
  },
  {
    id: 3,
    name: 'Leala Dennis',
    specialty: 'Coiffeur',
    note: 3.8,
    location: 'Chambéry',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'l.dennos@hotmail.fr',
    website: 'https://coiffure-leala-chambery.fr',
    category: 'Services',
    top: false,
  },
  {
    id: 4,
    name: 'Chocolaterie Labbé',
    specialty: 'Chocolatier',
    note: 4.9,
    location: 'Grenoble',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'chocolaterie-labbe@gmail.com',
    website: 'https://chocolaterie-labbe.fr',
    category: 'Alimentation',
    top: true,
  },
  {
    id: 5,
    name: 'Claude Quinn',
    specialty: 'Bijoutier',
    note: 4.2,
    location: 'Aix-les-bains',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'claude.quinn@gmail.com',
    website: '',
    category: 'Fabrication',
    top: false,
  },
  {
    id: 6,
    name: 'Valérie Laderoute',
    specialty: 'Toiletteur',
    note: 4.5,
    location: 'Valence',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'v-laredoute@gmail.com',
    website: '',
    category: 'Services',
    top: false,
  },
  {
    id: 7,
    name: 'Boutot & fils',
    specialty: 'Menuisier',
    note: 4.7,
    location: 'Bourg-en-bresse',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'boutot-menuiserie@gmail.com',
    website: 'https://boutot-menuiserie.com',
    category: 'Bâtiment',
    top: false,
  },
  {
    id: 8,
    name: 'CM Graphisme',
    specialty: 'Webdesign',
    note: 4.4,
    location: 'Valence',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'contact@cm-graphisme.com',
    website: 'https://cm-graphisme.com',
    category: 'Services',
    top: false,
  },
  {
    id: 9,
    name: 'Orville Salmons',
    specialty: 'Chauffagiste',
    note: 5,
    location: 'Evian',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'o-salmons@live.com',
    website: '',
    category: 'Bâtiment',
    top: true,
  },
  {
    id: 10,
    name: 'Au pain chaud',
    specialty: 'Boulanger',
    note: 4.8,
    location: 'Montélimar',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'aupainchaud@hotmail.com',
    website: '',
    category: 'Alimentation',
    top: true,
  },
  {
    id: 11,
    name: 'Boucherie Dumont',
    specialty: 'Boucher',
    note: 4.5,
    location: 'Lyon',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'boucherie.dumond@gmail.com',
    website: '',
    category: 'Alimentation',
    top: false,
  },
  {
    id: 12,
    name: 'Mont Blanc Eléctricité',
    specialty: 'Electricien',
    note: 4.5,
    location: 'Chamonix',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'contact@mont-blanc-electricite.com',
    website: 'https://mont-blanc-electricite.com',
    category: 'Bâtiment',
    top: false,
  },
  {
    id: 13,
    name: 'Traiteur Truchon',
    specialty: 'Traiteur',
    note: 4.1,
    location: 'Privas',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'contact@truchon-traiteur.fr',
    website: 'https://truchon-traiteur.fr',
    category: 'Alimentation',
    top: false,
  },
  {
    id: 14,
    name: 'Le monde des fleurs',
    specialty: 'Fleuriste',
    note: 4.6,
    location: 'Annonay',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'contact@le-monde-des-fleurs-annonay.fr',
    website: 'https://le-monde-des-fleurs-annonay.fr',
    category: 'Services',
    top: false,
  },
  {
    id: 15,
    name: 'Royden Charbonneau',
    specialty: 'Carrossier',
    note: 3.8,
    location: 'Saint-Priest',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'r.charbonneau@gmail.com',
    website: '',
    category: 'Services',
    top: false,
  },
  {
    id: 16,
    name: 'Ernest Carignan',
    specialty: 'Ferronier',
    note: 5,
    location: 'Le Puy-en-Velay',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'e-carigan@hotmail.com',
    website: '',
    category: 'Fabrication',
    top: false,
  },
  {
    id: 17,
    name: "C'est sup'hair",
    specialty: 'Coiffeur',
    note: 4.1,
    location: 'Romans-sur-Isère',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. ',
    email: 'sup-hair@gmail.com',
    website: 'https://sup-hair.fr',
    category: 'Services',
    top: false,
  },
];
