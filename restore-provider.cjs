const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  /export default function App\(\) \{\n  const \{ t, language \} = useLanguage\(\);\n  const \[data, setData\] = useState<AppData>\(INITIAL_DATA\);\n  const \[isQuoteOpen, setIsQuoteOpen\] = useState\(false\);\n  const \[isAdminOpen, setIsAdminOpen\] = useState\(false\);\n\n  const handleSaveData = \(newData: AppData\) => \{\n    setData\(newData\);\n    setIsAdminOpen\(false\);\n    alert\(t\('contact.alertSuccess'\)\);\n  \};\n\n  return \(\n    <div className="font-sans selection:bg-amber-500\/30 selection:text-amber-500 text-white">/g,
  `export default function App() {
  const { t, language } = useLanguage();
  const [data, setData] = useState<AppData>(INITIAL_DATA);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleSaveData = (newData: AppData) => {
    setData(newData);
    setIsAdminOpen(false);
    alert(t('contact.alertSuccess'));
  };

  return (
    <ActiveSceneProvider>
    <div className="font-sans selection:bg-amber-500/30 selection:text-amber-500 text-white">
      <CinematicBackground />`
);

content = content.replace(
  /      <MapSection \/>\n      <Footer socialLinks=\{data.socialLinks\} \/>\n    <\/div>\n  \);\n\}\n/m,
  `      <MapSection />
      <Footer socialLinks={data.socialLinks} />
    </div>
    </ActiveSceneProvider>
  );
}
`
);

fs.writeFileSync('src/App.tsx', content);
console.log('Provider restored');
