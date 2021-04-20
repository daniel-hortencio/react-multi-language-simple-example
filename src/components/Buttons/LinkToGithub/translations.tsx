import { IOptionLanguage } from "../../../hooks/LanguageProvider/types";

interface ILinkToGithubTranslations extends IOptionLanguage {
  buttonGithub: string;
}

export const LinkToGithubTranslations: Array<ILinkToGithubTranslations> = [
  {
    value: "pt",
    buttonGithub: "Ver no github",
  },
  {
    value: "es",
    buttonGithub: "Ver en github",
  },
  {
    value: "en",
    buttonGithub: "View on github",
  },
];
