// Everything about Beste that isn't a piece of writing lives here.
// Edit freely: each field has an English (en) and Turkish (tr) version.

export const site = {
  name: 'beste yılmaz',
  url: 'https://besteyilmaz.com', // change once a domain is chosen
  email: '', // add a contact address to show it on the about page
  lastUpdated: '2026-10',

  // Sections that are still being gathered. Flip to true when ready.
  show: {
    papers: true, // page shows a "coming soon" note until papers are added below
    art: true, // shows "coming soon" until art is added
  },

  bio: {
    en: [
      'Beste Yılmaz was born in 2004 and writes poetry and fiction in Istanbul.',
      'She is a senior at Boğaziçi University, studying Western Languages and Literatures, where she is president of the literature club. She graduated from Robert College in 2023 with the Halide Edip Adıvar Prize in Literature.',
      'Her work appears in South Florida Poetry Journal, ANMLY, Eunoia Review, and Molecule, and is forthcoming in Third Coast and Flyway Journal.',
    ],
    tr: [
      'Beste Yılmaz 2004’te doğdu; İstanbul’da şiir ve öykü yazıyor.',
      'Boğaziçi Üniversitesi Batı Dilleri ve Edebiyatları bölümünde son sınıf öğrencisi ve üniversitenin edebiyat kulübünün başkanı. 2023’te Robert Kolej’den Halide Edip Adıvar Edebiyat Ödülü ile mezun oldu.',
      'Yazıları South Florida Poetry Journal, ANMLY, Eunoia Review ve Molecule’de yayımlandı; Third Coast ve Flyway Journal’da yayımlanacak.',
    ],
  },

  education: [
    {
      when: '2023 – ',
      en: { place: 'Boğaziçi University', what: 'B.A., Western Languages and Literatures' },
      tr: { place: 'Boğaziçi Üniversitesi', what: 'Lisans, Batı Dilleri ve Edebiyatları' },
    },
    {
      when: '2023',
      en: { place: 'Robert College', what: 'High school diploma' },
      tr: { place: 'Robert Kolej', what: 'Lise diploması' },
    },
  ],

  honors: [
    {
      when: '2023',
      en: 'Halide Edip Adıvar Prize in Literature, Robert College',
      tr: 'Halide Edip Adıvar Edebiyat Ödülü, Robert Kolej',
    },
    {
      when: '2023',
      en: 'First place, poetry, Jane Page English Writing Contest',
      tr: 'Birincilik, şiir dalı, Jane Page İngilizce Yazı Yarışması',
    },
    {
      when: '2023',
      en: 'First place, Suna Kıraç Story Contest, Koç Schools',
      tr: 'Birincilik, Koç Okulları Suna Kıraç Öykü Yarışması',
    },
    {
      when: '2023',
      en: 'Second place, Tanpınar Poetry Contest',
      tr: 'İkincilik, Tanpınar Şiir Yarışması',
    },
  ],

  roles: [
    {
      when: 'now',
      en: 'President, Literature Club, Boğaziçi University',
      tr: 'Başkan, Edebiyat Kulübü, Boğaziçi Üniversitesi',
    },
    {
      when: 'before',
      en: 'Moderator, creative writing branch, Literature Club, Boğaziçi University',
      tr: 'Moderatör, yaratıcı yazarlık birimi, Edebiyat Kulübü, Boğaziçi Üniversitesi',
    },
    {
      when: '– 2023',
      en: 'Contributor, Martı literary magazine, Robert College',
      tr: 'Yazar, Martı edebiyat dergisi, Robert Kolej',
    },
  ],

  // Publications that don't have their own page yet (no text or link on hand).
  alsoIn: [
    { venue: 'Molecule: A Tiny Lit Mag', note: { en: 'Issue 14, Spring 2026', tr: 'Sayı 14, İlkbahar 2026' }, url: 'https://moleculetinylitmag.art.blog/' },
    { venue: 'Third Coast', note: { en: 'forthcoming', tr: 'yayımlanacak' } },
    { venue: 'Flyway Journal', note: { en: 'forthcoming', tr: 'yayımlanacak' } },
  ],

  // Add papers here as { title, where, year, abstract: {en, tr}, pdf: '/papers/file.pdf' }
  papers: [] as Array<{ title: string; where?: string; year?: string; abstract?: { en: string; tr: string }; pdf?: string }>,

  // Add art here as { src: '/art/file.jpg', title, year, medium: {en, tr}, alt: {en, tr} }
  // Put the image files in public/art/. alt describes the piece for screen readers.
  art: [] as Array<{ src: string; title: string; year?: string; medium?: { en: string; tr: string }; alt: { en: string; tr: string } }>,
};
