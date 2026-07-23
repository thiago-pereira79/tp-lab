import { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/useTranslation';

interface HeaderProps {
  onDownloadCV: () => void;
  onBackToHome?: () => void;
  onNavigate?: (page: string) => void;
  themeColor?: string;
}

export default function Header({ onDownloadCV, onBackToHome, onNavigate, themeColor }: HeaderProps) {
  const { t, language, setLanguage } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dropdownOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black py-6 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
        
        {/* Left Side Logo */}
        <div className="flex justify-start items-center">
          <div 
            onClick={() => onBackToHome?.()} 
            className={`flex items-center gap-1 ${onBackToHome ? 'cursor-pointer hover:opacity-80' : ''}`}
          >
            <span className="font-display font-black text-xl tracking-wider text-white font-sans">TP</span>
            <span className="font-display font-black text-xl tracking-wider text-[#00D0F8] font-sans">LAB</span>
          </div>
        </div>

        {/* Center Side Back Button */}
        <div className="flex justify-center items-center">
          {onBackToHome && (
            <button
              type="button"
              onClick={onBackToHome}
              className="group flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-black tracking-widest uppercase transition-all duration-300 focus:outline-none cursor-pointer"
              style={{ color: themeColor || '#00D0F8' }}
              id="header-back-to-home-btn"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
              <span>{t.header.voltarAoInicio}</span>
            </button>
          )}
        </div>

        {/* Right Side Actions Panel (Clean and Minimalist as on reference image) */}
        <div className="flex justify-end items-center relative">
          
          {/* IDIOMAS Dropdown Wrapper */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="px-2.5 sm:px-4 py-1 sm:py-1.5 border border-[#00D0F8] hover:bg-[#00D0F8]/5 text-[#00D0F8] hover:text-white font-mono text-[9px] sm:text-[11px] font-bold tracking-widest uppercase rounded-lg transition-all duration-350 focus:outline-none cursor-pointer shrink-0"
              id="header-idiomas-btn"
              aria-label={t.header.languageSelector}
              aria-expanded={dropdownOpen}
              aria-haspopup="listbox"
              aria-controls="header-language-options"
            >
              {t.header.idiomas}
            </button>

            {/* Dropdown Menu Option List */}
            {dropdownOpen && (
              <div 
                id="header-language-options"
                className="absolute right-0 top-full mt-2 w-24 bg-[#050607] border border-[#00D0F8] rounded-lg shadow-[0_4px_20px_rgba(0,208,248,0.15)] py-1 z-50 flex flex-col font-mono text-[10px] sm:text-xs overflow-hidden"
                role="listbox"
                aria-label={t.header.languageSelector}
              >
                {(['pt', 'en', 'es'] as const).map((lang) => (
                  <button
                    type="button"
                    key={lang}
                    onClick={() => {
                      setLanguage(lang);
                      setDropdownOpen(false);
                    }}
                    role="option"
                    aria-selected={language === lang}
                    aria-label={t.header.languageNames[lang]}
                    aria-current={language === lang ? 'true' : undefined}
                    className={`w-full text-center py-2 transition-all cursor-pointer font-bold select-none ${
                      language === lang 
                        ? 'text-[#00D0F8] bg-[#00D0F8]/10' 
                        : 'text-zinc-300 hover:text-white hover:bg-[#00D0F8]/5'
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}
