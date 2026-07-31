const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// For Contact component
content = content.replace(
  /setIsSubmitting\(true\);\s*setTimeout\(\(\) => \{/m,
  `setIsSubmitting(true);
    
    // Add Google Analytics Conversion Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_event_contact', {});
    }

    setTimeout(() => {`
);

// For QuoteModal component
content = content.replace(
  /const message = \`\*\$\{t\("quote\.title"\)\}/m,
  `// Add Google Analytics Conversion Event
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion_event_contact', {});
    }
    const message = \`*\${t("quote.title")}`
);

fs.writeFileSync('src/App.tsx', content);
