export default {
  items: [
    {
      name: 'Gösterge',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'YENİ',
      },
    },
    {
      title: true,
      name: 'Menü',
      wrapper: {
        element: '',
        attributes: {},
      },
    },
    {
      name: 'Üretim Y.Tanımları',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'İstasyon Operasyon',
          url: '/UretimYonetimi/istasyonoperasyon',
          icon: 'icon-puzzle',
        },
        {
          name: 'Duruş',
          url: '/base/durus',
          icon: 'icon-puzzle',
        },
        {
          name: 'Menü',
          url: '/base/menu',
          icon: 'icon-puzzle',
        },
        {
          name: 'Kullanıcı',
          url: '/base/kullanici',
          icon: 'icon-puzzle',
        },
        {
          name: 'Yetki',
          url: '/base/yetki',
          icon: 'icon-puzzle',
        },
        {
          name: 'İstasyon',
          url: '/base/istasyon',
          icon: 'icon-puzzle',
        },
        {
          name: 'Personel İstasyon İlişki',
          url: '/base/personelistasyoniliski',
          icon: 'icon-puzzle',
        },
        {
          name: 'Vardiya',
          url: '/base/vardiya',
          icon: 'icon-puzzle',
        },
        {
          name: 'Bağımsız Duruş Ekranı',
          url: '/base/bagimsizdurus',
          icon: 'icon-puzzle',
        },
        {
          name: 'Üretim Parametresi',
          url: '/base/uretimoarammetresi',
          icon: 'icon-puzzle',
        },
        {
          name: 'Otomasyon Parametresi',
          url: '/base/otomasyonparametresi',
          icon: 'icon-puzzle',
        },
        {
          name: 'Çevrim Süre',
          url: '/base/sure',
          icon: 'icon-puzzle',
        }
      ],
    },
    {
      name: 'Otomasyon',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Üretim Kayıtları',
          url: '/buttons/buttons',
          icon: 'icon-cursor',
        },
        {
          name: 'Otomasyon Kayıtları',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor',
        }
      ],
    },
    {
      name: 'Üretim Logları',
      url: '/icons',
      icon: 'icon-pie-chart',
      children: [
        {
          name: 'Üretim Logları',
          url: '/icons/coreui-icons',
          icon: 'icon-pie-chart',
          badge: {
            variant: 'info',
            text: 'NEW',
          },
        },
        {
          name: 'Otomasyon Logları',
          url: '/icons/flags',
          icon: 'icon-pie-chart',
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-pie-chart',
          badge: {
            variant: 'secondary',
            text: '4.7i',
          },
        } 
      ],
    },
  ],
};
