import { useLanguage } from "../hooks/LanguageProvider";

export const GetTextTranslated = (page: Array<Object>, element: string) => {
  const { selectedLanguage } = useLanguage();

  const translatedElement = page.map((translation: any) => {
    if (translation.value === selectedLanguage.value) {
      return translation[element];
    }
    return null;
  })[0];

  console.log(translatedElement);

  return translatedElement;
};
