import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Yükleniyor...</div>;
}

const Charts = Loadable({
  loader: () => import('./views/Charts'),
  loading: Loading,
});

const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});

const Widgets = Loadable({
  loader: () => import('./views/Widgets/Widgets'),
  loading: Loading,
});

// UretimYonetimTanimlari
const IstasyonOperasyon = Loadable({
  loader: () => import('./views/UretimYonetimTanimlari/IstasyonOperasyon'),
  loading: Loading,
});

// routes
const routes = [
  { path: '/', exact: true, name: 'Ana Sayfa', component: DefaultLayout },
  { path: '/dashboard', name: 'Gösterge Paneli', component: Dashboard },

  { path: '/widgets', name: 'Widgets', component: Widgets },
  
  { path: '/charts', name: 'Charts', component: Charts },
  
  // UretimYonetimTanimlari
  { path: '/UretimYonetimi/istasyonoperasyon', name: 'İstasyon Operasyon', component: IstasyonOperasyon },
];

export default routes;
