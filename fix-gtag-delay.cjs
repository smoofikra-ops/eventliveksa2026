const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target1 = `    // Add Google Analytics Conversion Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_event_contact', {});
    }

    setTimeout(() => {
      setIsSubmitting(false);
      const message = \`*طلب خدمة من الموقع*\\n\\n\` +
        \`*الاسم:* \${formData.name}\\n\` +
        (formData.email ? \`*البريد الإلكتروني:* \${formData.email}\\n\` : '') +
        \`*رقم الجوال:* \${formData.phone}\\n\` +
        \`*نوع العميل:* \${formData.clientType}\\n\` +
        \`*الخدمة المطلوبة:* \${formData.serviceRequested}\\n\` +
        \`*الرسالة أو التفاصيل:* \${formData.details}\`;

      const waUrl = \`https://wa.me/966536753679?text=\${encodeURIComponent(message)}\`;
      window.open(waUrl, '_blank');
      
      setFormData({ name: '', email: '', phone: '05', clientType: 'أفراد', serviceRequested: 'تصوير فيديو', details: '' });
      localStorage.removeItem('contactFormDraft');
    }, 500);`;

const rep1 = `    const message = \`*طلب خدمة من الموقع*\\n\\n\` +
      \`*الاسم:* \${formData.name}\\n\` +
      (formData.email ? \`*البريد الإلكتروني:* \${formData.email}\\n\` : '') +
      \`*رقم الجوال:* \${formData.phone}\\n\` +
      \`*نوع العميل:* \${formData.clientType}\\n\` +
      \`*الخدمة المطلوبة:* \${formData.serviceRequested}\\n\` +
      \`*الرسالة أو التفاصيل:* \${formData.details}\`;
    const waUrl = \`https://wa.me/966536753679?text=\${encodeURIComponent(message)}\`;

    const onComplete = () => {
      window.open(waUrl, '_blank');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', phone: '05', clientType: 'أفراد', serviceRequested: 'تصوير فيديو', details: '' });
      localStorage.removeItem('contactFormDraft');
    };

    // Add Google Analytics Conversion Event with delayed navigation fallback
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_event_contact', {
        'event_callback': onComplete,
        'event_timeout': 2000
      });
      // Fallback timeout in case gtag fails silently to fire the callback
      setTimeout(() => setIsSubmitting(false), 2500);
    } else {
      setTimeout(onComplete, 500);
    }`;

content = content.replace(target1, rep1);

const target2 = `    // Add Google Analytics Conversion Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_event_contact', {});
    }
    const message = \`*\${t("quote.title")} جديد*\\nالاسم: \${formData.name}\\nالبريد: \${formData.email}\\nالهاتف: \${formData.phone}\\nنوع العميل: \${formData.clientType}\\nنوع الفعالية: \${formData.eventType}\\nملاحظات: \${formData.notes}\`;

    const encodedMessage = encodeURIComponent(message);
    window.open(\`https://wa.me/966536753679?text=\${encodedMessage}\`, '_blank');
    onClose();`;

const rep2 = `    const message = \`*\${t("quote.title")} جديد*\\nالاسم: \${formData.name}\\nالبريد: \${formData.email}\\nالهاتف: \${formData.phone}\\nنوع العميل: \${formData.clientType}\\nنوع الفعالية: \${formData.eventType}\\nملاحظات: \${formData.notes}\`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl = \`https://wa.me/966536753679?text=\${encodedMessage}\`;

    const onComplete = () => {
      window.open(waUrl, '_blank');
      onClose();
    };

    // Add Google Analytics Conversion Event with delayed navigation fallback
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_event_contact', {
        'event_callback': onComplete,
        'event_timeout': 2000
      });
    } else {
      onComplete();
    }`;

content = content.replace(target2, rep2);

fs.writeFileSync('src/App.tsx', content);
