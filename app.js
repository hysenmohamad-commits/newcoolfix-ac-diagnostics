const { useState, useEffect, useMemo } = React;

const IconAlertCircle = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>);
const IconSearch = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>);
const IconWrench = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>);

const BRANDS = [
  'LG', 'Samsung', 'Daikin', 'Mitsubishi Electric', 
  'Midea', 'Gree', 'Carrier', 'Toshiba', 
  'Panasonic', 'Haier', 'Hitachi', 'Fujitsu',
  'Whirlpool', 'Bosch', 'Sharp', 'York',
  'Lennox', 'Trane', 'Cooper & Hunter'
];

const CATEGORIES = [
  'Sensor Errors', 'Communication Errors', 'Refrigerant Issues', 
  'Fan/Motor Errors', 'Drainage Problems', 'Power Faults', 'System Faults'
];

function App() {
  const [lang, setLang] = useState('en');
  const [selectedBrand, setSelectedBrand] = useState('LG');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [activeResult, setActiveResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [browseResults, setBrowseResults] = useState([]);

  const isRtl = lang === 'ar';
  const getText = (field) => {
    if (typeof field === 'object' && field !== null) return field[lang] || field['en'] || '';
    return field || '';
  };
  const getArray = (field) => {
    if (typeof field === 'object' && !Array.isArray(field)) return field[lang] || field['en'] || [];
    return Array.isArray(field) ? field : [];
  };

  const handleSearch = (e) => {
    e?.preventDefault();
    const query = searchQuery.trim();
    if (!query) return;

    const newHistory = [query, ...searchHistory.filter(q => q.toLowerCase() !== query.toLowerCase())].slice(0, 5);
    setSearchHistory(newHistory);

    const result = window.errorCodesData.find(
      (item) => item.brand === selectedBrand && item.errorCode.toLowerCase() === query.toLowerCase()
    );

    if (result) {
      setActiveResult(result);
      setNotFound(false);
      setSelectedCategory(null);
      setBrowseResults([]);
    } else {
      setActiveResult(null);
      setNotFound(true);
      setSelectedCategory(null);
      setBrowseResults([]);
    }
  };

  const selectHistoryItem = (item) => {
    setSearchQuery(item);
    const result = window.errorCodesData.find(
      (data) => data.brand === selectedBrand && data.errorCode.toLowerCase() === item.toLowerCase()
    );
    if (result) {
      setActiveResult(result);
      setNotFound(false);
      setSelectedCategory(null);
      setBrowseResults([]);
    } else {
      setActiveResult(null);
      setNotFound(true);
      setSelectedCategory(null);
      setBrowseResults([]);
    }
  };

  const handleCategorySelect = (cat) => {
    if (selectedCategory === cat) {
      setSelectedCategory(null);
      setBrowseResults([]);
    } else {
      setSelectedCategory(cat);
      const results = window.errorCodesData.filter(item => item.brand === selectedBrand && item.category === cat);
      setBrowseResults(results);
      setActiveResult(null);
      setNotFound(false);
      setSearchQuery('');
    }
  };

  useEffect(() => {
    setSearchQuery('');
    setActiveResult(null);
    setNotFound(false);
    setSelectedCategory(null);
    setBrowseResults([]);
  }, [selectedBrand]);

  const severityColors = {
    minor: 'bg-green-900 text-green-300 border-green-500',
    moderate: 'bg-amber-900 text-amber-300 border-amber-500',
    critical: 'bg-red-900 text-red-300 border-red-500'
  };

  return (
    <div className="max-w-5xl mx-auto p-6 min-h-screen flex flex-col relative">
      
      {/* Languages placement fixed: moved to document flow instead of absolute positioning */}
      <div className="flex justify-end mb-6">
        <div className="flex gap-2 bg-slate-900 p-1.5 rounded-lg border border-slate-600 shadow-md">
          <button onClick={() => setLang('en')} className={`px-4 py-1.5 text-xs font-bold rounded transition-colors ${lang === 'en' ? 'bg-cyanAccent text-bgDark' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>EN</button>
          <button onClick={() => setLang('fr')} className={`px-4 py-1.5 text-xs font-bold rounded transition-colors ${lang === 'fr' ? 'bg-cyanAccent text-bgDark' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`}>FR</button>
          <button onClick={() => setLang('ar')} className={`px-4 py-1.5 text-xs font-bold rounded transition-colors ${lang === 'ar' ? 'bg-cyanAccent text-bgDark' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`} dir="rtl">عربي</button>
        </div>
      </div>

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2 flex justify-center items-center gap-3 text-white">
          <IconWrench /> CoolFix
        </h1>
        <p className="text-slate-300 text-lg font-medium">Industrial AC Diagnostic Terminal</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 flex-grow">
        <div className="md:col-span-4 space-y-8">
          <div>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-3">Target Platform</h2>
            <div className="grid grid-cols-2 gap-2">
              {BRANDS.map(brand => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`py-2 px-2 text-xs font-bold rounded-md transition-all border ${selectedBrand === brand ? 'bg-cyanAccent border-cyanAccent text-bgDark shadow-[0_0_15px_rgba(0,212,255,0.4)]' : 'bg-slate-900 border-slate-600 text-slate-200 hover:border-cyanAccent hover:text-white'}`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={handleSearch}>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-3">Search Code</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. E1, CH05..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
                className="w-full bg-slate-900 border-2 border-slate-600 rounded-md py-3 pl-4 pr-12 text-white placeholder-slate-400 focus:outline-none focus:border-cyanAccent focus:ring-0 mono uppercase font-bold"
              />
              <button type="submit" className="absolute right-2 top-2 bottom-2 bg-slate-800 text-slate-200 hover:text-bgDark hover:bg-cyanAccent p-2 rounded transition-colors font-bold">
                <IconSearch />
              </button>
            </div>
          </form>

          <div>
            <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-3">Browse by Category</h2>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategorySelect(cat)}
                  className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase tracking-wider transition-colors border ${selectedCategory === cat ? 'bg-cyanAccent border-cyanAccent text-bgDark shadow-[0_0_10px_rgba(0,212,255,0.4)]' : 'bg-slate-900 border-slate-600 text-slate-200 hover:border-cyanAccent hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {searchHistory.length > 0 && (
            <div>
              <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-3">Recent Queries</h2>
              <div className="flex flex-wrap gap-2">
                {searchHistory.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => selectHistoryItem(item)}
                    className="bg-slate-900 border-2 border-slate-600 hover:border-cyanAccent text-white px-3 py-1 rounded-full text-sm font-bold mono transition-colors uppercase"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="md:col-span-8">
          <h2 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-3">Diagnostic Data</h2>
          
          {!activeResult && !notFound && browseResults.length === 0 && (
            <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-12 text-center text-slate-300 flex flex-col items-center mt-2 font-medium">
              <IconAlertCircle />
              <p className="mt-4">Select a brand and enter an error code, or browse by category to begin diagnostics.</p>
            </div>
          )}

          {!activeResult && browseResults.length > 0 && (
            <div className="animate-fade-in">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{selectedCategory}</h3>
                <span className="text-sm font-bold text-white border-2 border-slate-600 px-3 py-1 rounded-full bg-slate-800">
                  {browseResults.length} {browseResults.length === 1 ? 'code' : 'codes'} found
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
                {browseResults.map(res => (
                  <button 
                    key={res.errorCode}
                    onClick={() => setActiveResult(res)}
                    className="text-left bg-slate-900 border-2 border-slate-700 hover:border-cyanAccent rounded-lg p-5 transition-colors group flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-3 w-full">
                      <span className="mono text-cyanAccent font-bold text-xl group-hover:text-white transition-colors">{res.errorCode}</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full uppercase font-bold border-2 ${severityColors[res.severity]}`}>{res.severity}</span>
                    </div>
                    <p className="font-bold text-white mb-2 line-clamp-1" dir={isRtl ? 'rtl' : 'ltr'}>{getText(res.problemTitle)}</p>
                    <p className="text-sm text-slate-300 font-medium line-clamp-2 leading-relaxed" dir={isRtl ? 'rtl' : 'ltr'}>{getText(res.problemDescription)}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {notFound && (
            <div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-8 text-center animate-fade-in shadow-lg mt-2">
              <div className="inline-flex items-center justify-center p-4 bg-slate-800 rounded-full text-slate-200 mb-4 border border-slate-600">
                <IconAlertCircle />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Code Not Recognized</h3>
              <p className="text-slate-300 font-medium mb-4">
                The error code <span className="mono text-cyanAccent font-bold tracking-widest">{searchQuery}</span> was not found in our database for <span className="text-white font-bold">{selectedBrand}</span>.
              </p>
              <p className="text-sm text-slate-400 font-medium">
                Please double-check the code or consult the official support documentation.
              </p>
            </div>
          )}

          {activeResult && (
            <div className="bg-slate-900 border-2 border-slate-700 rounded-xl overflow-hidden animate-fade-in shadow-lg relative mt-2">
              <div className="absolute top-0 left-0 w-full h-2 bg-cyanAccent"></div>
              
              {selectedCategory && (
                <div className="pt-6 px-8 pb-0">
                  <button onClick={() => setActiveResult(null)} className="text-sm text-cyanAccent hover:text-white flex items-center gap-2 transition-colors font-bold">
                    <span className="text-lg leading-none mb-0.5">←</span> Back to {selectedCategory}
                  </button>
                </div>
              )}

              <div className={`p-8 ${selectedCategory ? 'pt-6' : ''}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-slate-300 text-sm font-bold uppercase">{activeResult.brand}</span>
                    <h3 className="text-5xl font-bold mono text-cyanAccent mt-1 flex items-center gap-3 tracking-widest">
                      {activeResult.errorCode.toUpperCase()}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border-2 ${severityColors[activeResult.severity]}`}>
                      {activeResult.severity}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border-2 bg-slate-800 border-slate-500 text-white">
                      {activeResult.category || 'System Faults'}
                    </span>
                  </div>
                </div>

                <div className="mb-6" dir={isRtl ? 'rtl' : 'ltr'}>
                  <h4 className="text-2xl font-bold mb-3 text-white">{getText(activeResult.problemTitle)}</h4>
                  <p className={`text-white font-medium leading-relaxed bg-slate-800 p-4 rounded-lg border-2 border-slate-600 ${isRtl ? 'pr-4 border-r-4 border-r-cyanAccent' : 'pl-4 border-l-4 border-l-cyanAccent'}`}>
                    {getText(activeResult.problemDescription)}
                  </p>
                </div>

                <div dir={isRtl ? 'rtl' : 'ltr'}>
                  <h4 className="text-sm uppercase tracking-widest text-slate-400 font-bold mb-4 flex items-center gap-2">
                    {lang === 'fr' ? 'Actions Recommandées' : lang === 'ar' ? 'الإجراءات الموصى بها' : 'Recommended Actions'}
                  </h4>
                  <ul className="space-y-3">
                    {getArray(activeResult.solutionSteps).map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white font-medium bg-slate-800 p-4 rounded-lg border-2 border-slate-700 hover:border-slate-500 transition-colors">
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-900 border-2 border-cyanAccent flex items-center justify-center text-sm font-mono font-bold text-cyanAccent mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-800 px-8 py-5 border-t-2 border-slate-700 flex items-center justify-between" dir={isRtl ? 'rtl' : 'ltr'}>
                <div className="flex items-center gap-3">
                  <span className="relative flex h-4 w-4">
                    {activeResult.requiresTechnician ? (
                      <>
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border border-red-800"></span>
                      </>
                    ) : (
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border border-green-800"></span>
                    )}
                  </span>
                  <span className={`text-sm font-bold uppercase tracking-wide ${activeResult.requiresTechnician ? 'text-red-400' : 'text-green-400'}`}>
                    {activeResult.requiresTechnician 
                      ? (lang === 'fr' ? 'Technicien Professionnel Requis' : lang === 'ar' ? 'مطلوب فني محترف' : 'Professional Technician Required') 
                      : (lang === 'fr' ? 'Réparation Bricolage Possible' : lang === 'ar' ? 'إصلاح منزلي ممكن' : 'DIY Fix is Possible')}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <footer className="mt-12 text-center text-slate-400 font-bold text-sm border-t-2 border-slate-800 pt-6">
        <p>CoolFix Database v1.0 • For reference only.</p>
      </footer>

      <style type="text/css" dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 0.4s ease-out forwards; }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0F172A; 
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #334155; 
          border-radius: 8px;
          border: 2px solid #0F172A;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #475569; 
        }
      `}} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);