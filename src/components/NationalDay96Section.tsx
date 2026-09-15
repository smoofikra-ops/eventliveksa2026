import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Camera, Video, Radio, Award, Sparkles, CheckCircle2, 
  MapPin, Clock, ShieldCheck, Flag, ArrowLeft, Send,
  ChevronDown, ChevronUp
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import { useAppTheme } from '../themeConfig';
import { SaudiEmblem, NationalDay96Badge, SaduPatternDivider, Recurring96Motif } from './NationalEmblem';

interface NationalDay96SectionProps {
  onQuoteClick: () => void;
}

export const NationalDay96Section: React.FC<NationalDay96SectionProps> = ({ onQuoteClick }) => {
  const { language } = useLanguage();
  const { isND96, campaign } = useAppTheme();
  const [activePackageTab, setActivePackageTab] = useState<number>(0);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);

  // If theme is not ND96, unmount completely for 100% reversible restoration
  if (!isND96) return null;

  const packages = [
    {
      id: 'parades',
      number: '01',
      shortTitle: language === 'ar' ? 'المسيرات الكبرى' : 'Parades & Shows',
      hook: language === 'ar' ? 'جوية وميدانية 4K' : '4K Drone & Ground',
      badge: language === 'ar' ? 'الأكثر طلباً' : 'Popular',
      isPopular: true,
      title: language === 'ar' ? 'باقة المسيرات والعروض الميدانية الكبرى' : 'Parades & Mega Shows Package',
      tagline: language === 'ar' ? 'تغطية جوية وميدانية شاملة للمسيرات وعروض الصقور والألعاب النارية' : 'Comprehensive aerial & ground coverage for parades, airshows and fireworks',
      icon: Camera,
      highlight: language === 'ar' ? 'الأكثر طلباً للجهات' : 'Most Popular for Entities',
      features: [
        language === 'ar' ? 'تصوير جوي سينمائي (درون 4K) مع التراخيص والموافقات الرسمية' : 'Cinematic 4K drone filming with official flight permits',
        language === 'ar' ? 'كاميرات بطيئة فائقة السرعة لتوثيق عروض الصقور السعودية والألعاب النارية' : 'High-speed slow-motion cameras for airshows & fireworks',
        language === 'ar' ? 'فريق فوتوغرافي متخصص لتوثيق مشاعر الفخر والأعلام والجماهير' : 'Dedicated photo crew documenting patriotic pride and crowd joy',
        language === 'ar' ? 'إنتاج فيديو سينمائي رسمي (Highlight Reel) بهوية اليوم الوطني 96' : 'Official cinematic highlight film with licensed national soundtrack',
        language === 'ar' ? 'تسليم أولي لمقاطع التغطية الميدانية السريعة خلال 2-3 ساعات للنشر' : 'Initial social clips delivery within 2-3 hours for live viral buzz'
      ],
      idealFor: language === 'ar' ? 'الأمانات، الهيئات، الجامعات، والفعاليات الجماهيرية الكبرى' : 'Municipalities, authorities, universities & mega public festivals'
    },
    {
      id: 'corporate',
      number: '02',
      shortTitle: language === 'ar' ? 'الاحتفالات الرسمية' : 'Corporate Events',
      hook: language === 'ar' ? 'استوديو وعرضة' : 'Photo Booth & Ardah',
      badge: language === 'ar' ? 'جاهزية كاملة' : 'Turnkey',
      isPopular: false,
      title: language === 'ar' ? 'باقة الاحتفالات الحكومية والمؤسسية' : 'Corporate & Government Ceremonies',
      tagline: language === 'ar' ? 'توثيق راقٍ لاحتفالات الموظفين، الاستقبال، والعرضة السعودية' : 'Distinguished coverage for corporate celebrations & royal ceremonies',
      icon: Award,
      highlight: language === 'ar' ? 'جاهزية كاملة' : 'Turnkey Production',
      features: [
        language === 'ar' ? 'استديو تصوير تذكاري فوري بهوية اليوم الوطني السعودي 96 (عزّنا بطبعنا)' : 'Instant on-site photo booth branded with ND96 identity ("Our Pride is Our Nature")',
        language === 'ar' ? 'توثيق كامل لكلمات القيادة، تكريم الموظفين، وأجواء العرضة السعودية' : 'Full recording of executive speeches, awards, and Saudi Ardah',
        language === 'ar' ? 'ألبوم صور فوتوغرافي مصحح ومُعد للنشر الإعلامي والداخلي' : 'Full color-graded photo album ready for internal & media press',
        language === 'ar' ? 'فيديو توثيقي يلخص فعاليات اليوم الوطني 96 للمنشأة' : 'Documentary summary video showcasing the celebration highlights',
        language === 'ar' ? 'طاقم تصوير رجالي ونسائي حسب تفضيل الجهة' : 'Professional male and female crew available upon request'
      ],
      idealFor: language === 'ar' ? 'الوزارات، البنوك، الشركات الكبرى، والمؤسسات الرائدة' : 'Ministries, banks, enterprise corporations, and institutions'
    },
    {
      id: 'broadcast',
      number: '03',
      shortTitle: language === 'ar' ? 'البث المباشر' : 'Live Broadcast',
      hook: language === 'ar' ? 'نقل حي وريلز' : 'Live & Reels',
      badge: language === 'ar' ? 'تغطية لايف' : 'Live',
      isPopular: false,
      title: language === 'ar' ? 'باقة البث المباشر والتغطية الرقمية الفورية' : 'Live Broadcast & Real-Time Trend Pack',
      tagline: language === 'ar' ? 'نقل حي فائق الدقة 4K مع صناعة محتوى فوري لمنصات التواصل' : 'Ultra HD 4K live broadcast with real-time social reels & trends',
      icon: Radio,
      highlight: language === 'ar' ? 'تغطية لايف' : 'Live & Trending',
      features: [
        language === 'ar' ? 'وحدة نقل خارجي (OB Van) وبث حي 4K لشاشات الميادين ومنصات التواصل' : '4K OB broadcast unit to LED giant screens and social streams',
        language === 'ar' ? 'فريق مونتاج فوري ميداني لإنتاج ريلز وتيك توك متصدر للترند' : 'On-site rapid edit team producing trending vertical reels in real-time',
        language === 'ar' ? 'ربط متعدد الكاميرات مع هندسة صوت وإضاءة مسرحية متكاملة' : 'Multi-camera switcher with calibrated stage audio and lighting',
        language === 'ar' ? 'تسجيل كامل بأعلى جودة مع أرشفة رقمية سحابية فورية' : 'Master quality raw recording with instant cloud digital archive',
        language === 'ar' ? 'دعم فني وتنسيق مباشر طوال ساعات الفعالية' : 'Dedicated broadcast engineers throughout the event duration'
      ],
      idealFor: language === 'ar' ? 'الحفلات الغنائية، المؤتمرات الوطنية، المسارح، والميادين المفتوحة' : 'National concerts, gala stages, public squares, and festivals'
    }
  ];

  const handleBookNationalDay = () => {
    const defaultMsg = language === 'ar'
      ? `السلام عليكم، نود الاستفسار وحجز باقة توثيق وتصوير لفعالية اليوم الوطني السعودي 96 (عزّنا بطبعنا) عبر إيفنت لايف.`
      : `Hello, we would like to inquire about booking our Saudi National Day 96 coverage package with EventLive KSA.`;
    const waUrl = `https://wa.me/966555663931?text=${encodeURIComponent(defaultMsg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section 
      id="national-day-96" 
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-[#020d07] via-[#041f10] to-[#03150b] border-y border-[#006C35]/30 scroll-mt-20"
    >
      {/* 96 Recurring Atmospheric Watermark Motif */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <Recurring96Motif opacity={0.04} size="text-[260px] sm:text-[400px] lg:text-[540px]" />
      </div>

      {/* Ambient Decorative National Day Glows — Eliminating Dead Visual Gaps */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] md:w-[1100px] h-[350px] bg-[#006C35]/25 blur-[140px] rounded-full pointer-events-none -z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[350px] bg-[#D4AF37]/15 blur-[130px] rounded-full pointer-events-none -z-0" />
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-[#028A45]/15 blur-[130px] rounded-full pointer-events-none -z-0" />
      
      {/* Subtle Pattern Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#006C35_1px,transparent_1px)] [background-size:28px_28px] opacity-25 pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 relative z-10">
        {/* Top Header Badge */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <NationalDay96Badge className="mb-4" lang={language} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <SaudiEmblem className="w-12 h-12 md:w-16 md:h-16 text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]" color="#D4AF37" />
          </motion.div>

          {/* Campaign Creative Direction: EVENT LIVE يوثق عزّ الوطن */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#006C35]/30 border border-[#006C35]/60 text-emerald-300 text-xs sm:text-sm font-black mb-3"
          >
            <span className="text-[#FBBF24]">عزّنا بطبعنا</span>
            <span className="text-white/40">•</span>
            <span>EVENT LIVE يوثق عزّ الوطن</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4 leading-tight"
          >
            {language === 'ar' ? (
              <>
                <span>نغطي احتفالات الوطن </span>
                <span className="bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                  كما تستحق 🇸🇦
                </span>
              </>
            ) : (
              <>
                <span>Documenting Saudi National Day </span>
                <span className="bg-gradient-to-r from-[#FBBF24] via-[#F59E0B] to-[#D4AF37] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.5)]">
                  96
                </span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-emerald-100/90 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed font-normal"
          >
            {language === 'ar'
              ? 'نحتفي معكم بـ 96 عاماً من العز والمجد. نوثق مشاعر الفخر وأبهى احتفالات اليوم الوطني 96 في كافة مدن ومناطق المملكة، بأطقم سينمائية سعودية، وتجهيزات بث مباشر 4K، وتصوير جوي مرخص.'
              : 'Celebrating 96 years of glory and pride. We document your national celebrations across all regions of the Kingdom with cinematic crews, 4K live broadcast, and licensed drone cinematography.'}
          </motion.p>
        </div>

        <SaduPatternDivider className="mb-12" />

        {/* Package Selector Heading */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#006C35]/30 text-emerald-300 text-xs font-bold border border-[#006C35]/50 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#FBBF24]" />
            <span>{language === 'ar' ? 'باقات التوثيق لليوم الوطني 96' : 'National Day 96 Coverage Packages'}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {language === 'ar' ? 'اختر الباقة المناسبة لاحتفال جهتك' : 'Select the Ideal Package for Your Event'}
          </h3>
          <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto">
            {language === 'ar'
              ? 'حلول مرنة متكاملة تلبي تطلعات الوزارات، الهيئات الحكومية، والشركات الكبرى'
              : 'Turnkey and flexible packages tailored for ministries, public authorities, and enterprises.'}
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE ONLY: 3 Compact Packages in ONE ROW + Expandable Details Below    */}
        {/* Strictly 1 row on mobile widths (375px, 390px, 414px) without carousel   */}
        {/* ========================================================================= */}
        <div className="block md:hidden mb-12">
          {/* Section Subtitle / Visual Cue */}
          <div className="flex items-center justify-between px-1 mb-2.5 text-[11px]">
            <div className="inline-flex items-center gap-1.5 font-bold text-emerald-300">
              <span className="text-xs">🇸🇦</span>
              <span>{language === 'ar' ? '3 باقات مخصصة لليوم الوطني 96' : '3 Dedicated ND96 Packages'}</span>
            </div>
            <span className="text-[10px] text-white/50 font-medium">
              {mobileExpandedIndex !== null
                ? (language === 'ar' ? 'انقر للإغلاق' : 'Tap to collapse')
                : (language === 'ar' ? 'انقر على الباقة للتفاصيل' : 'Tap card to expand')}
            </span>
          </div>

          {/* 3-Card Single Row (Fits all 3 cards simultaneously inside 375px, 390px, 414px) */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full">
            {packages.map((pkg, idx) => {
              const Icon = pkg.icon;
              const isSelected = mobileExpandedIndex === idx;

              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => setMobileExpandedIndex(isSelected ? null : idx)}
                  className={`relative flex flex-col justify-between items-center text-center p-2 rounded-xl transition-all duration-200 cursor-pointer select-none min-h-[148px] h-full ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#006C35]/60 via-[#004d25]/85 to-[#022010] border-2 border-[#D4AF37] shadow-[0_0_18px_rgba(212,175,55,0.35)] -translate-y-0.5'
                      : 'bg-black/60 backdrop-blur-md border border-[#006C35]/40 hover:border-emerald-500/50 text-white/90 active:scale-[0.98]'
                  }`}
                  aria-expanded={isSelected}
                  aria-controls={`mobile-package-details-${pkg.id}`}
                >
                  {/* Downward Pointer Arrow for Active State */}
                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-x-[6px] border-x-transparent border-t-[8px] border-t-[#D4AF37] z-20 pointer-events-none" />
                  )}

                  {/* Top Row: Package Number & Key Identifier Badge */}
                  <div className="w-full flex items-center justify-between gap-1 mb-1">
                    <span className={`text-[9px] font-mono font-black px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-[#D4AF37] text-black' : 'bg-white/10 text-white/70'
                    }`}>
                      {pkg.number}
                    </span>

                    {pkg.badge && (
                      <span className={`text-[8px] font-bold px-1 py-0.5 rounded truncate max-w-[65px] ${
                        pkg.isPopular
                          ? 'bg-amber-500/20 text-[#FBBF24] border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      }`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  {/* Package Icon */}
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center my-1 transition-all ${
                    isSelected
                      ? 'bg-[#006C35] text-[#FBBF24] shadow-[0_0_12px_rgba(0,108,53,0.8)] border border-[#D4AF37]/50'
                      : 'bg-white/5 text-emerald-300 border border-white/10'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Short Package Title (Consistent 2-line height) */}
                  <div className="w-full my-0.5">
                    <p className={`text-[11px] leading-tight font-black transition-colors line-clamp-2 min-h-[28px] flex items-center justify-center ${
                      isSelected ? 'text-white' : 'text-white/90'
                    }`}>
                      {pkg.shortTitle}
                    </p>
                  </div>

                  {/* Strong Hook / Short Descriptor (1 line) */}
                  <p className={`text-[9px] truncate w-full font-medium mb-1 ${
                    isSelected ? 'text-emerald-200' : 'text-white/55'
                  }`}>
                    {pkg.hook}
                  </p>

                  {/* Clear Visual Cue for Tap to Expand/Collapse */}
                  <div className={`w-full pt-1 border-t flex items-center justify-center gap-0.5 text-[9px] font-bold transition-colors ${
                    isSelected
                      ? 'border-[#D4AF37]/40 text-[#FBBF24]'
                      : 'border-white/5 text-emerald-400/70'
                  }`}>
                    <span>{isSelected ? (language === 'ar' ? 'مفتوح' : 'Open') : (language === 'ar' ? 'تفاصيل' : 'Details')}</span>
                    {isSelected ? (
                      <ChevronUp className="w-2.5 h-2.5" />
                    ) : (
                      <ChevronDown className="w-2.5 h-2.5" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Full Details Panel: Expands Directly Below the 3-Card Row */}
          <AnimatePresence mode="wait">
            {mobileExpandedIndex !== null && (
              <motion.div
                key={`mobile-panel-${mobileExpandedIndex}`}
                id={`mobile-package-details-${packages[mobileExpandedIndex].id}`}
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: 'auto', y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden mt-3.5"
              >
                <div className="bg-gradient-to-br from-[#062413]/95 via-[#03190d] to-[#020d07] border-2 border-[#006C35]/80 rounded-2xl p-4 sm:p-5 shadow-[0_15px_40px_rgba(0,0,0,0.7)] relative">
                  {/* Active Package Banner Header */}
                  <div className="flex items-start justify-between gap-3 mb-3 border-b border-white/10 pb-3">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FBBF24] text-[10px] font-black mb-1.5">
                        <Flag className="w-3 h-3" />
                        <span>{packages[mobileExpandedIndex].highlight}</span>
                      </div>
                      <h4 className="text-lg font-black text-white leading-snug">
                        {packages[mobileExpandedIndex].title}
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setMobileExpandedIndex(null)}
                      className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-white/80 flex items-center justify-center flex-shrink-0 text-xs transition-colors cursor-pointer"
                      aria-label="Close details"
                    >
                      ✕
                    </button>
                  </div>

                  <p className="text-emerald-200/90 text-xs mb-4 leading-relaxed">
                    {packages[mobileExpandedIndex].tagline}
                  </p>

                  {/* Complete Features List */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2">
                      {language === 'ar' ? 'محتويات وتجهيزات الباقة:' : 'Package Inclusions:'}
                    </p>
                    <ul className="space-y-2">
                      {packages[mobileExpandedIndex].features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/90 leading-relaxed">
                          <div className="w-4 h-4 rounded-full bg-[#006C35] flex items-center justify-center text-[#FBBF24] flex-shrink-0 mt-0.5 border border-[#D4AF37]/30">
                            <CheckCircle2 className="w-2.5 h-2.5" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ideal For Target Note */}
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-black/60 border border-emerald-500/25 text-[11px] text-emerald-300 mb-5 leading-normal">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#FBBF24] flex-shrink-0" />
                    <span>
                      <strong>{language === 'ar' ? 'الفئة المستهدفة:' : 'Ideal For:'}</strong> {packages[mobileExpandedIndex].idealFor}
                    </span>
                  </div>

                  {/* Booking Card & Primary CTAs */}
                  <div className="bg-black/70 rounded-xl p-3.5 border border-[#006C35]/50 text-center">
                    <div className="flex items-center justify-center gap-2 mb-1">
                      <SaudiEmblem className="w-5 h-5" color="#D4AF37" />
                      <span className="text-xs font-bold text-white">
                        {language === 'ar' ? 'حجز مسبق لليوم الوطني 96' : 'ND96 Early Booking'}
                      </span>
                    </div>
                    <div className="text-[10px] text-[#FBBF24] font-bold mb-1.5">
                      {language === 'ar' ? 'عزّنا بطبعنا • تغطية احترافية شاملة' : 'Our Pride is Our Nature'}
                    </div>
                    <p className="text-[10px] text-white/70 mb-3 leading-tight">
                      {language === 'ar'
                        ? 'نظراً لضغط المناسبات الوطنية، ننصح بالحجز المبكر لضمان حجز الطواقم والمعدات والتراخيص.'
                        : 'Due to high demand during National Day, early reservation is recommended to secure permits and crew.'}
                    </p>

                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={onQuoteClick}
                        className="w-full py-3 px-4 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] text-black font-black text-xs sm:text-sm shadow-md active:scale-98 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <span>{language === 'ar' ? 'طلب عرض سعر للباقة' : 'Request Package Quote'}</span>
                        <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-0 ltr:rotate-180" />
                      </button>

                      <button
                        type="button"
                        onClick={handleBookNationalDay}
                        className="w-full py-2.5 px-4 rounded-full bg-[#006C35]/80 hover:bg-[#006C35] text-white border border-[#006C35] text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Send className="w-3 h-3 text-emerald-300" />
                        <span>{language === 'ar' ? 'استشارة سريعة عبر واتساب' : 'Quick Chat on WhatsApp'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP ONLY: Preserved Approved Desktop Layout (Visible only on md and up) */}
        {/* ========================================================================= */}
        <div className="hidden md:block">
          {/* Package Tabs */}
          <div className="flex justify-center gap-2 mb-8 overflow-x-auto pb-2 hide-scrollbar">
            {packages.map((pkg, idx) => {
              const Icon = pkg.icon;
              const isSelected = activePackageTab === idx;
              return (
                <button
                  key={pkg.id}
                  onClick={() => setActivePackageTab(idx)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#006C35] via-[#028A45] to-[#006C35] text-white border border-[#D4AF37]/70 shadow-[0_0_20px_rgba(0,108,53,0.6)]'
                      : 'bg-black/50 text-white/70 border border-white/10 hover:border-emerald-500/40 hover:text-white'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FBBF24]' : 'text-white/60'}`} />
                  <span>{pkg.title}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Package Detailed Spotlight Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePackageTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="bg-gradient-to-br from-[#062413]/90 via-[#03190d]/95 to-[#020d07] border-2 border-[#006C35]/60 hover:border-[#D4AF37]/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] relative overflow-hidden mb-12"
            >
              {/* Ambient Corner Accent */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#006C35]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column (Details) */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#FBBF24] text-xs font-black mb-4">
                    <Flag className="w-3.5 h-3.5" />
                    <span>{packages[activePackageTab].highlight}</span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
                    {packages[activePackageTab].title}
                  </h4>

                  <p className="text-emerald-200/90 text-sm sm:text-base mb-6 leading-relaxed">
                    {packages[activePackageTab].tagline}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {packages[activePackageTab].features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#006C35] flex items-center justify-center text-[#FBBF24] flex-shrink-0 mt-0.5 shadow-sm border border-[#D4AF37]/30">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-white/90 text-sm sm:text-base font-medium leading-normal">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Ideal For Note */}
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black/50 border border-emerald-500/25 text-xs sm:text-sm text-emerald-300">
                    <ShieldCheck className="w-4 h-4 text-[#FBBF24] flex-shrink-0" />
                    <span>
                      <strong>{language === 'ar' ? 'الفئة المستهدفة:' : 'Ideal For:'}</strong> {packages[activePackageTab].idealFor}
                    </span>
                  </div>
                </div>

                {/* Right Column (CTA Card & Fast Booking) */}
                <div className="lg:col-span-5 bg-black/60 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center relative">
                  <div className="mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[#006C35]/40 border border-[#D4AF37]/40 flex items-center justify-center mb-4 text-[#FBBF24] shadow-[0_0_25px_rgba(0,108,53,0.4)]">
                      <SaudiEmblem className="w-10 h-10" color="#D4AF37" />
                    </div>
                    <h5 className="text-xl font-bold text-white mb-1">
                      {language === 'ar' ? 'حجز مسبق لليوم الوطني 96' : 'National Day 96 Booking'}
                    </h5>
                    <div className="text-xs text-[#FBBF24] font-bold mb-2">
                      {language === 'ar' ? 'عزّنا بطبعنا • تغطية احترافية شاملة' : 'Our Pride is Our Nature'}
                    </div>
                    <p className="text-white/70 text-xs sm:text-sm mb-4 leading-relaxed">
                      {language === 'ar'
                        ? 'نظراً لضغط المناسبات الوطنية، ننصح بالحجز المبكر لضمان حجز الطواقم والمعدات والتراخيص.'
                        : 'Due to high demand during National Day, early reservation is recommended to secure permits and crew.'}
                    </p>
                    
                    <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20 mb-6">
                      <Clock className="w-3.5 h-3.5 animate-pulse" />
                      <span>{language === 'ar' ? 'عروض الحجز المبكر متاحة الآن' : 'Early Bird Offers Now Open'}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={onQuoteClick}
                      className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#D4AF37] to-[#F59E0B] text-black font-black text-sm sm:text-base transition-all duration-300 shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>{language === 'ar' ? 'طلب عرض سعر للباقة' : 'Request Package Quote'}</span>
                      <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                    </button>

                    <button
                      onClick={handleBookNationalDay}
                      className="w-full py-3.5 px-6 rounded-full bg-[#006C35]/80 hover:bg-[#006C35] text-white border border-[#006C35] hover:border-emerald-400 font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4 text-emerald-300" />
                      <span>{language === 'ar' ? 'استشارة سريعة عبر واتساب' : 'Quick Chat on WhatsApp'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-5 rounded-2xl bg-black/40 border border-[#006C35]/40 text-emerald-200 text-xs sm:text-sm">
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🇸🇦</span>
            <span className="font-bold">
              {language === 'ar'
                ? 'طواقم عمل متكاملة في الرياض، جدة، الشرقية، والمنطقة الجنوبية والشمالية'
                : 'Full field teams stationed in Riyadh, Jeddah, Eastern, Southern & Northern regions'}
            </span>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              {language === 'ar' ? 'تراخيص درون نظامية' : 'Certified Drones'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              {language === 'ar' ? 'اعتمادات حكومية' : 'Gov Contract Ready'}
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              {language === 'ar' ? 'فواتير ضريبية معتمدة' : 'Tax Compliant'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
