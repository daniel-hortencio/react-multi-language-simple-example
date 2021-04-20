import { IOptionLanguage } from "../../../hooks/LanguageProvider/types";

interface ILanguageToggleTranslations extends IOptionLanguage {
  label: string;
}

export const LanguageToggleTranslations: Array<ILanguageToggleTranslations> = [
  {
    value: "pt",
    label: "Português (Brasil)",
  },
  {
    value: "es",
    label: "Español",
  },
  {
    value: "en",
    label: "English",
  },
];
