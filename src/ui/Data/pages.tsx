import { Home } from 'lucide-react';

interface pageUi {
  name: string;
  url: string;
  icon: JSX.Element;
}

// Accueil
// Stocks
// Repas
// Commandes
// Paramètres

export const pages: pageUi[] = [
  {
    name: 'Accueil',
    url: '/dashboard',
    icon: <Home />,
  },
  {
    name: 'Stocks',
    url: '/inventory',
    icon: <Home />,
  },
  {
    name: 'Repas',
    url: '/meals',
    icon: <Home />,
  },
  {
    name: 'Commandes',
    url: '/orders',
    icon: <Home />,
  },
  {
    name: 'Paramètres',
    url: '/settings',
    icon: <Home />,
  },
];
