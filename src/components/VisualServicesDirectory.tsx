import React, { useState } from 'react';
import { ArrowUpLeft, ArrowLeft, Camera, Video, Menu, X, Phone, ChevronLeft } from 'lucide-react';

type ServiceCard = { title:string; desc:string; cardBgImage?:string; id:string };
const CDN='https://nmolabs-cdn.b-cdn.net/eventlive/website/gallery-2026/';
const serviceSlugs=['exhibitions','festivals','national-events','opening-ceremonies','conferences','corporate-events','live-streaming','commercial-ads'];
const additional=[
  {id:'photo',title:'التصوير الفوتوغرافي',desc:'صور احترافية للفعاليات والمعارض والمؤتمرات توثق التفاصيل واللحظات المهمة.',cardBgImage:CDN+'eventlive-35.jpg',href:'/services/photography'},
  {id:'video',title:'تصوير الفيديو والإنتاج المرئي',desc:'تصوير ومونتاج أفلام الفعاليات والمقاطع القصيرة والمحتوى المرئي المخصص للنشر.',cardBgImage:CDN+'eventlive-06.jpg',href:'/services/videography'}
];
export function VisualServicesDirectory({services}:{services:ServiceCard[]}){
 const [menuOpen,setMenuOpen]=useState(false);
 const cards=[...services.map((s,i)=>({...s,href:'/services/'+serviceSlugs[i]})),...additional].filter(s=>Boolean(s.href));
 const primaryImage=services[0]?.cardBgImage||CDN+'eventlive-35.jpg';
 return <div dir="rtl" className="min-h-screen bg-[#0b0b10] text-white">
   <main>
    <header className="relative isolate min-h-[440px] md:min-h-[540px] flex items-end overflow-hidden">
      <img src={primaryImage} alt="تغطية الفعاليات والإنتاج المرئي في السعودية" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-[#0b0b10]/75 to-black/35"/>
      <div className="relative max-w-7xl mx-auto w-full px-5 md:px-8 pb-14 pt-32">
        <nav aria-label="مسار التنقل" className="text-sm text-amber-200 mb-7"><a href="/">الرئيسية</a> <ChevronLeft className="inline-block mx-2" size={14}/> خدماتنا</nav>
        <span className="inline-flex rounded-full border border-amber-400/50 bg-black/40 px-5 py-2 text-amber-300 text-sm font-bold mb-6">EVENTLIVE KSA / OUR SERVICES</span>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.25] max-w-4xl mb-6">كل لحظة تستحق<br/><span className="text-amber-400">أن تُروى باحتراف</span></h1>
        <p className="max-w-2xl text-base md:text-xl leading-9 text-white/85 mb-8">من التصوير الفوتوغرافي وإنتاج الفيديو إلى تغطية المعارض والمؤتمرات والبث المباشر، نقدم حلول إنتاج مرئي متكاملة تناسب هوية فعاليتك وأهدافها.</p>
        <div className="flex flex-wrap gap-3"><a href="#all-services" className="rounded-full bg-amber-500 text-black px-7 py-4 font-bold hover:bg-amber-400">استكشف خدماتنا ↓</a><a href="/contact" className="rounded-full border border-white/50 bg-black/30 px-7 py-4 font-bold hover:bg-white/10">ناقش مشروعك معنا</a></div>
      </div>
    </header>
    <section id="all-services" className="scroll-mt-28 max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14"><div><p className="text-amber-400 font-bold tracking-widest mb-4">خدماتنا المتخصصة</p><h2 className="text-3xl md:text-5xl font-black leading-tight">حلول تغطي كل تفاصيل الحدث</h2><p className="text-white/65 leading-8 mt-5 max-w-2xl">اختر الخدمة المناسبة لفعاليتك وتعرّف على تفاصيل التنفيذ والمخرجات.</p></div><span className="text-amber-400 text-5xl font-black">{String(cards.length).padStart(2,'0')}</span></div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
        {cards.map((s,i)=><article key={s.id} className="group relative isolate overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#17171d] hover:border-amber-400/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
          <a href={s.href} className="block h-full" aria-label={'استكشف خدمة '+s.title}>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#24242b]">
              <img src={s.cardBgImage||CDN+'eventlive-35.jpg'} alt={'خدمة '+s.title+' — إيفنت لايف'} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={e=>{const img=e.currentTarget;if(!img.dataset.fallback){img.dataset.fallback='1';img.src=CDN+'eventlive-35.jpg';}}}/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#17171d]/80 via-transparent to-black/20"/>
              <span className="absolute top-5 right-5 rounded-full bg-black/60 border border-white/25 backdrop-blur px-4 py-2 text-xs font-bold text-white/90">{String(i+1).padStart(2,'0')} / {String(cards.length).padStart(2,'0')}</span>
              <span className="absolute bottom-5 left-5 h-11 w-11 rounded-full bg-amber-500 text-black flex items-center justify-center group-hover:rotate-45 transition-transform"><ArrowUpLeft size={23}/></span>
            </div>
            <div className="p-6 md:p-7"><h3 className="text-2xl font-bold leading-relaxed mb-3 group-hover:text-amber-300 transition-colors">{s.title}</h3><p className="text-white/65 leading-8 text-sm md:text-base min-h-[90px]">{s.desc}</p><span className="mt-6 inline-flex items-center gap-2 text-amber-400 font-bold text-sm">اكتشف تفاصيل الخدمة <ArrowLeft size={17}/></span></div>
          </a>
        </article>)}
      </div>
    </section>
    <section className="relative overflow-hidden border-y border-white/10 bg-[#131318] py-20"><div className="max-w-7xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center"><div><p className="text-amber-400 font-bold mb-4">من الفكرة إلى التسليم</p><h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">تغطية بصرية تُظهر<br/>قيمة فعاليتك</h2><p className="text-white/70 leading-9">نبدأ بفهم أهدافك واللحظات التي يجب توثيقها، ثم نحدد فريق العمل والتجهيزات والمخرجات المناسبة، مع مراجعة الجودة قبل التسليم.</p></div><div className="grid grid-cols-2 gap-4">{[['01','فهم الاحتياج'],['02','خطة التغطية'],['03','التصوير والإنتاج'],['04','المراجعة والتسليم']].map(([num,label])=><div key={num} className="rounded-2xl border border-amber-400/15 bg-white/5 p-6"><span className="text-3xl font-black text-amber-400">{num}</span><h3 className="mt-5 text-lg font-bold">{label}</h3></div>)}</div></div></section>
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28"><div className="relative overflow-hidden rounded-[2rem] border border-amber-400/30 bg-gradient-to-l from-amber-500/20 via-[#1a1716] to-[#0e0e12] p-8 md:p-16"><p className="text-amber-300 font-bold mb-5">ابدأ مشروعك مع إيفنت لايف</p><h2 className="text-3xl md:text-5xl font-black mb-6">فعاليتك القادمة تستحق تغطية استثنائية</h2><p className="text-white/75 leading-9 max-w-2xl mb-8">شاركنا موعد الفعالية وموقعها والخدمات المطلوبة، وسنساعدك في تحديد نطاق التغطية المناسب.</p><div className="flex flex-wrap gap-3"><a href="/contact" className="rounded-full bg-amber-500 text-black font-bold px-8 py-4 hover:bg-amber-400">اطلب عرض سعر <ArrowUpLeft className="inline-block mr-2" size={18}/></a><a href="tel:+966555663931" className="rounded-full border border-white/30 px-8 py-4 font-bold"><Phone className="inline-block ml-2" size={18}/>0555663931</a></div></div></section>
   </main>

 </div>
}
