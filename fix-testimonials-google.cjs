const fs = require('fs');

let translations = fs.readFileSync('src/LanguageContext.tsx', 'utf8');

if (!translations.includes('testimonial.6.name')) {
  translations = translations.replace(
    /'testimonial.5.text': 'Thank you for the distinguished coverage of the opening ceremony. The team was very cooperative and provided us with creative ideas that added value to the event.',/,
    `'testimonial.5.text': 'Thank you for the distinguished coverage of the opening ceremony. The team was very cooperative and provided us with creative ideas that added value to the event.',
    'testimonial.6.name': 'Google Maps User',
    'testimonial.6.role': 'Local Guide',
    'testimonial.6.text': 'Amazing experience with EventLive. Their professionalism and quality exceeded expectations.',
    'testimonial.7.name': 'Google Maps User',
    'testimonial.7.role': 'Customer',
    'testimonial.7.text': 'Best company I dealt with for photography and live streaming. High quality and punctual.',
    'testimonial.8.name': 'Google Maps User',
    'testimonial.8.role': 'Local Guide',
    'testimonial.8.text': 'Great coverage, the photos and videos turned out amazing. Highly recommend them.',
    `
  );

  translations = translations.replace(
    /'testimonial.5.text': 'أشكركم على التغطية المميزة لحفل الافتتاح. الفريق كان متعاوناً جداً وقدموا لنا أفكاراً إبداعية أضافت قيمة للحدث.',/,
    `'testimonial.5.text': 'أشكركم على التغطية المميزة لحفل الافتتاح. الفريق كان متعاوناً جداً وقدموا لنا أفكاراً إبداعية أضافت قيمة للحدث.',
    'testimonial.6.name': 'خالد الشمري (خرائط جوجل)',
    'testimonial.6.role': 'مرشد محلي',
    'testimonial.6.text': 'صراحة شغلهم جبار ومرتب، غطوا مؤتمرنا بالكامل وكانت النتيجة فوق الممتازة. فريق محترف ومتعاون جداً.',
    'testimonial.7.name': 'فهد الدوسري (خرائط جوجل)',
    'testimonial.7.role': 'عميل',
    'testimonial.7.text': 'أفضل شركة تعاملت معاها في التصوير والبث المباشر. دقة في المواعيد وجودة عالية جداً في الإخراج.',
    'testimonial.8.name': 'منى العبدالله (خرائط جوجل)',
    'testimonial.8.role': 'مرشد محلي',
    'testimonial.8.text': 'يعطيهم العافية، التغطية كانت احترافية والصور والفيديوهات طلعت رهيبة. أنصح بالتعامل معهم.',
    `
  );
  
  fs.writeFileSync('src/LanguageContext.tsx', translations);
}

let app = fs.readFileSync('src/App.tsx', 'utf8');

if (!app.includes("testimonial.6.name")) {
  const oldArray = `    { name: t('testimonial.5.name'), role: t('testimonial.5.role'), text: t('testimonial.5.text') }
  ];`;

  const newArray = `    { name: t('testimonial.5.name'), role: t('testimonial.5.role'), text: t('testimonial.5.text') },
    { name: t('testimonial.6.name'), role: t('testimonial.6.role'), text: t('testimonial.6.text') },
    { name: t('testimonial.7.name'), role: t('testimonial.7.role'), text: t('testimonial.7.text') },
    { name: t('testimonial.8.name'), role: t('testimonial.8.role'), text: t('testimonial.8.text') }
  ];`;

  app = app.replace(oldArray, newArray);
  fs.writeFileSync('src/App.tsx', app);
}
