export type CinematicScene = {
  id: string;
  url: string;
  accentColor: string;
  headerTheme: 'light' | 'dark';
};

export const cinematicScenes: CinematicScene[] = [
  {
    id: 'hero',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785439546/IMG_7539_silqno.jpg',
    accentColor: '#ff8a00',
    headerTheme: 'dark'
  },
  {
    id: 'partners',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785439543/FE4DE51C-3433-456F-9CB4-6A49A98E8832_mvwcrb.png',
    accentColor: '#d4af37',
    headerTheme: 'dark'
  },
  {
    id: 'stats',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785439545/%D8%B4%D8%B1%D9%83%D8%A7%D8%AA_-_%D8%A7%D9%94%D8%B3%D8%B3_uumk1r.jpg',
    accentColor: '#cda85c',
    headerTheme: 'light'
  },
  {
    id: 'services',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785439544/3949A9BD-E2A0-4130-8B98-2C3FB9F83230_sknndt.png',
    accentColor: '#ff8a00',
    headerTheme: 'dark'
  },
  {
    id: 'portfolio',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785461098/861f9b3e-32d2-438c-b153-acf69dcddc97.png',
    accentColor: '#ff8a00',
    headerTheme: 'dark'
  },
  {
    id: 'faq',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785439544/%D9%84%D9%8A%D8%A8_husatz.jpg',
    accentColor: '#ffa500',
    headerTheme: 'dark'
  },
  {
    id: 'process',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785439542/AE57F765-1B8A-4991-B595-3BC0238F25F1_rxb9kw.png',
    accentColor: '#e0c07c',
    headerTheme: 'light'
  },
  {
    id: 'testimonials',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785439543/DEC7E01F-F3F0-4B3A-AB3B-D708D85847DA_fqrh42.png',
    accentColor: '#ff8a00',
    headerTheme: 'dark'
  },
  {
    id: 'contact',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785460449/%D9%84%D9%82%D8%B7%D8%A9_%D8%A7%D9%84%D8%B4%D8%A7%D8%B4%D8%A9_2026-07-31_%D9%81%D9%8A_4.13.39_%D8%B5_puxkte.png',
    accentColor: '#ff8a00',
    headerTheme: 'dark'
  },
  {
    id: 'map',
    url: 'https://res.cloudinary.com/ozd726ro/image/upload/v1785460640/63cd15ef-d292-4bf9-bcf3-a1a0126af793.png',
    accentColor: '#e0b555',
    headerTheme: 'dark'
  }
];
