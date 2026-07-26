import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, TranslationType } from './translations';
import { safeStorage } from '../utils/storage';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = safeStorage.getItem('tp-lab-language');
    if (saved === 'pt' || saved === 'en' || saved === 'es') {
      return saved as Language;
    }
    return 'pt';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    safeStorage.setItem('tp-lab-language', lang);
  };

  useEffect(() => {
    const langMapRoute = {
      pt: 'pt-BR',
      en: 'en',
      es: 'es',
    };
    document.documentElement.lang = langMapRoute[language];
  }, [language]);

  const value: LanguageContextProps = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
