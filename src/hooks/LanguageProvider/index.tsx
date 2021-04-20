import React, { useState } from "react";
import { useContext, createContext } from "react";

import { IOptionLanguage } from "./types";

interface ILanguageProvider {
  selectedLanguage: IOptionLanguage;
  setSelectedLanguage: React.Dispatch<React.SetStateAction<IOptionLanguage>>;
}

const LanguageContext = createContext({} as ILanguageProvider);

export const LanguageProvider: React.FC = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<IOptionLanguage>({
    value: "pt",
  });

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context)
    throw new Error("useLanguage must be used within a LanguageProvider");

  const { selectedLanguage, setSelectedLanguage } = context;

  return { selectedLanguage, setSelectedLanguage };
};
