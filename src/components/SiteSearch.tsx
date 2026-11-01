import React, { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

const entries = [
  ["الخدمات", "/services", "جميع خدمات التصوير والإنتاج والفعاليات"],
  ["أعمالنا", "/portfolio", "معرض الأعمال والمشاريع"],
  ["الأسئلة الشائعة", "/faq", "أجوبة أسئلة العملاء"],
  ["تواصل معنا", "/#contact", "التواصل وطلب عرض سعر"],
  ["تنظيم وتغطية المعارض", "/services/exhibitions", "تصوير المعارض والأجنحة"],
  ["المهرجانات", "/services/festivals", "تصوير المهرجانات"],
  ["الفعاليات الوطنية", "/services/national-events", "تغطية المناسبات الوطنية"],
  ["حفلات الافتتاح", "/services/opening-ceremonies", "تصوير افتتاح المشاريع"],
  ["المؤتمرات", "/services/conferences", "تغطية وتصوير المؤتمرات"],
  ["الفعاليات المؤسسية", "/services/corporate-events", "فعاليات الشركات"],
  ["البث المباشر", "/services/live-streaming", "البث المباشر للمؤتمرات والفعاليات"],
  ["الإعلانات التجارية", "/services/commercial-ads", "الإنتاج الإعلاني وتصوير المنتجات"]
];
export default function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const results = useMemo(() => entries.filter(([name,, description]) => (name + " " + description).toLocaleLowerCase("ar").includes(query.trim().toLocaleLowerCase("ar"))), [query]);
  return <>
    <button type="button" aria-label="البحث في الموقع" title="البحث في الموقع" onClick={() => setOpen(true)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/15"><Search size={20}/></button>
    {open && <div role="dialog" aria-modal="true" aria-label="البحث في الموقع" dir="rtl" className="fixed inset-0 z-[500] bg-black/90 p-4 pt-20 md:pt-32" onKeyDown={e => { if(e.key === "Escape") setOpen(false); }}>
      <div className="mx-auto max-w-2xl rounded-2xl border border-amber-500/40 bg-[#151515] p-5 shadow-2xl">
        <div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-bold text-white">البحث في الموقع</h2><button aria-label="إغلاق البحث" onClick={() => setOpen(false)} className="rounded-full p-2 text-white hover:bg-white/10"><X/></button></div>
        <label htmlFor="eventlive-site-search" className="mb-2 block text-sm text-white/70">ابحث عن خدمة أو صفحة</label>
        <input id="eventlive-site-search" autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="مثال: تصوير المؤتمرات" className="w-full rounded-xl border border-white/20 bg-black/60 p-4 text-white outline-none focus:border-amber-400"/>
        <div className="mt-5 max-h-[55vh] space-y-2 overflow-y-auto">{results.length ? results.map(([name,href,description]) => <a key={href} href={href} className="block rounded-xl border border-white/10 p-3 text-white hover:border-amber-400 hover:bg-white/5"><strong className="block">{name}</strong><span className="text-sm text-white/65">{description}</span></a>) : <p className="p-4 text-white/70">لا توجد نتائج مطابقة. جرّب كلمة أخرى.</p>}</div>
      </div>
    </div>}
  </>;
}
