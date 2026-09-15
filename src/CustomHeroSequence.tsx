import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { useAppTheme } from './themeConfig';

export const CustomHeroSequence = () => {
  const { language } = useLanguage();
  const { isND96 } = useAppTheme();

  // States for text
  const [title1, setTitle1] = useState('');
  const [showSpecialIcon, setShowSpecialIcon] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [title2, setTitle2] = useState('');
  
  const [sub1, setSub1] = useState('');
  const [sub2, setSub2] = useState('');
  const [sub3, setSub3] = useState('');
  
  const [showArrow, setShowArrow] = useState(false);

  // Full texts (Arabic)
  const fullTitle1 = isND96 ? 'نوثق عزّ الوطن' : 'نوثق لحظتك';
  const fullTitle2 = isND96 ? ' | عزّنا بطبعنا 🇸🇦' : ' باحترافية عالية';
  
  const fullSub1 = isND96 ? 'تغطية وإنتاج احترافي' : 'تصوير فوتوغرافي';
  const fullSubHighlight = isND96 ? ' لليوم الوطني 96' : ' وفيديو';
  const fullSub3 = isND96
    ? ' وتصوير سينمائي وبث مباشر لاحتفالات المملكة في جميع المدن والمناطق. 🇸🇦✨'
    : ' وبث مباشر احترافي للمهرجانات، المؤتمرات، الفعاليات الوطنية، وغير ذلك في جميع أنحاء المملكة. ✨';

  useEffect(() => {
    if (language !== 'ar') {
      if (isND96) {
        setTitle1('Documenting the Nation\'s Glory');
        setTitle2(' | Our Pride is Our Nature 🇸🇦');
        setSub1('Professional coverage & production');
        setSub2(' for National Day 96');
        setSub3(' with 4K cinematic broadcast for celebrations across all regions of the Kingdom. 🇸🇦✨');
      } else {
        setTitle1('Documenting your moments');
        setTitle2(' with high professionalism');
        setSub1('Photography');
        setSub2(' and video');
        setSub3(' and professional live streaming for festivals, conferences, national events, and more across the Kingdom. ✨');
      }
      setShowArrow(true);
      return;
    }

    let isMounted = true;
    const typeText = async (
      text: string, 
      setFn: React.Dispatch<React.SetStateAction<string>>, 
      speed: number = 50,
      initialText: string = ''
    ) => {
      let current = initialText;
      for (let i = 0; i < text.length; i++) {
        if (!isMounted) return;
        current += text[i];
        setFn(current);
        await new Promise(r => setTimeout(r, speed));
      }
    };

    const deleteText = async (
      currentLength: number,
      targetLength: number,
      setFn: React.Dispatch<React.SetStateAction<string>>,
      textToSlice: string,
      speed: number = 25
    ) => {
      for (let i = currentLength; i >= targetLength; i--) {
        if (!isMounted) return;
        setFn(textToSlice.slice(0, i));
        await new Promise(r => setTimeout(r, speed));
      }
    };

    const runSequence = async () => {
      while (isMounted) {
        // Reset
        setTitle1(''); setTitle2(''); setSub1(''); setSub2(''); setSub3('');
        setShowSpecialIcon(false); setShowCamera(false); setShowArrow(false);

        // 1. Type Title 1
        await typeText(fullTitle1, setTitle1, 75);
        await new Promise(r => setTimeout(r, 200));

        // 2. Show Flag or Heart
        if (!isMounted) return;
        setShowSpecialIcon(true);
        await new Promise(r => setTimeout(r, 700));
        if (!isMounted) return;
        setShowSpecialIcon(false);

        // 3. Show 📸
        if (!isMounted) return;
        setShowCamera(true);
        await new Promise(r => setTimeout(r, 700));
        if (!isMounted) return;
        setShowCamera(false);

        // 4. Type Title 2
        await typeText(fullTitle2, setTitle2, 75);
        await new Promise(r => setTimeout(r, 400));

        // 5. Type Sub 1
        await typeText(fullSub1, setSub1, 45);
        await new Promise(r => setTimeout(r, 200));

        // 6. Type Sub Highlight
        await typeText(fullSubHighlight, setSub2, 45);
        await new Promise(r => setTimeout(r, 400));

        // 7. Delete part of Sub Highlight
        await deleteText(fullSubHighlight.length, 2, setSub2, fullSubHighlight, 40); 
        await new Promise(r => setTimeout(r, 250));

        // 8. Rewrite
        await typeText(fullSubHighlight.slice(2), setSub2, 45, fullSubHighlight.slice(0, 2));
        await new Promise(r => setTimeout(r, 200));

        // 9. Type rest of subtitle
        await typeText(fullSub3, setSub3, 35);
        await new Promise(r => setTimeout(r, 500));

        // 10. Show arrow
        if (!isMounted) return;
        setShowArrow(true);
        
        // 11. Pause before erasing
        await new Promise(r => setTimeout(r, 4500));
        if (!isMounted) return;
        setShowArrow(false);
        
        // 12. Erase everything backwards smoothly
        await deleteText(fullSub3.length, 0, setSub3, fullSub3, 18);
        await deleteText(fullSubHighlight.length, 0, setSub2, fullSubHighlight, 20);
        await deleteText(fullSub1.length, 0, setSub1, fullSub1, 20);
        await deleteText(fullTitle2.length, 0, setTitle2, fullTitle2, 30);
        await deleteText(fullTitle1.length, 0, setTitle1, fullTitle1, 30);
        
        // Brief pause before rewriting
        await new Promise(r => setTimeout(r, 800));
      }
    };

    runSequence();
    return () => { isMounted = false; };
  }, [language, isND96, fullTitle1, fullTitle2, fullSub1, fullSubHighlight, fullSub3]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
      className="relative"
    >
      {/* Particles Overlay Behind Text - Emerald/Gold for ND96, Amber for Original */}
      <div className="absolute -inset-10 z-[-1] pointer-events-none overflow-hidden">
        {[...Array(16)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: [0, 0.85, 0],
              scale: [0, Math.random() * 1.5 + 0.5, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 4, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
            className={`absolute w-2 h-2 rounded-full blur-[2px] ${
              isND96 
                ? i % 2 === 0 ? 'bg-emerald-400/50' : 'bg-[#D4AF37]/50'
                : 'bg-amber-500/40'
            }`}
          />
        ))}
      </div>

      <h1 className="text-[20px] sm:text-[32px] md:text-[48px] font-black leading-[1.3] sm:leading-[1.2] mb-4 sm:mb-6 tracking-tight min-h-[44px] sm:min-h-[85px] flex flex-wrap justify-center items-center gap-x-1 sm:gap-x-2 text-white">
        <span className="drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">{title1}</span>
        <AnimatePresence mode="wait">
          {showSpecialIcon && (
            <motion.span 
              key="special"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="inline-block text-[24px] sm:text-[36px]"
            >
              {isND96 ? '🇸🇦' : '❤️'}
            </motion.span>
          )}
          {showCamera && (
            <motion.span 
              key="camera"
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: 1.2, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 20 }}
              className="inline-block text-[24px] sm:text-[36px]"
            >
              📸
            </motion.span>
          )}
        </AnimatePresence>
        <span className={isND96 ? "text-gradient-nd96 text-gradient font-black" : "text-gradient w-auto font-black"}>
          {title2}
        </span>
      </h1>
      
      <p className="text-[13px] sm:text-[16px] md:text-[20px] text-white/90 mb-4 sm:mb-8 leading-[1.6] sm:leading-[1.75] max-w-[70ch] font-normal min-h-[40px] sm:min-h-[75px] text-center">
        {sub1}
        <span className={isND96 ? "text-emerald-400 font-bold" : "text-amber-500 font-bold"}>
          {sub2}
        </span>
        {sub3}
      </p>

      <AnimatePresence>
        {showArrow && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`absolute -bottom-16 right-20 md:right-40 pointer-events-none ${isND96 ? 'text-emerald-400' : 'text-amber-500'}`}
          >
             <motion.svg 
                animate={{ y: [0, 8, 0] }} 
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
                className={isND96 ? "drop-shadow-[0_0_10px_rgba(0,108,53,0.7)]" : "drop-shadow-[0_0_8px_rgba(255,138,0,0.5)]"}
             >
                <path d="M12 5v14M19 12l-7 7-7-7"/>
             </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
