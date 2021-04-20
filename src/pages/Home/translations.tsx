import { IOptionLanguage } from "../../hooks/LanguageProvider/types";
import { developerName, lastUpdate } from "../../utils/constants";

interface IHomePageTranslations extends IOptionLanguage {
  title: string;
  description: string;
  motivation: string;
  motivationText: string;
  techologies: string;
  developedBy: string;
  lastUpdate: string;
}

export const HomePageTranslations: Array<IHomePageTranslations> = [
  {
    value: "pt",
    title: "Um exemplo simples de multi-language usando React",
    description:
      "Um exemplo simples de como a API de Context do React pode ser usada para solucionar o problema da internacionalização de um projeto",
    motivation: "Motivação",
    motivationText:
      "Num mundo altamente globalizado temos sempre a possibilidade de escalar nosso negócio para além das fronteiras nacionais. Por isso nosso projeto deve estar preparado para ser multi-language. Mas a dúvida que surge é COMO fazer isso. Esse exemplo simples busca documentar a solução para ese problema usando recursos do próprio React. Ao passo que melhores práticas forem descobertas para solucionar o multi-language esse exemplo será refatorado. Por ultimo, mas não menos importante, é que esse exemplo possa dar uma idéia inicial a outros que não sabem por onde começar.",
    techologies: "Tecnologías",
    developedBy: `Desenvolvido por ${developerName}`,
    lastUpdate: `Última atualização: ${lastUpdate}`,
  },
  {
    value: "es",
    title: "Un ejemplo sencillo de multi-language usando React",
    description:
      "Un ejemplo sencillo de cómo se puede utilizar la API React Context para resolver el problema de internacionalización de un proyecto",
    motivation: "Motivación",
    motivationText:
      "En un mundo altamente globalizado, siempre tenemos la posibilidad de escalar nuestro negocio más allá de las fronteras nacionales. Por eso nuestro proyecto debe estar preparado para ser multilingüe. Pero la pregunta que surge es CÓMO hacerlo. Este sencillo ejemplo busca documentar la solución a este problema utilizando los propios recursos de React. A medida que se descubran las mejores prácticas para resolver varios idiomas, este ejemplo se refactorizará. Por último, pero no menos importante, este ejemplo puede dar una idea inicial a otras personas que no saben por dónde empezar.",
    techologies: "Tecnologias",
    developedBy: `Desarrollado por ${developerName}`,
    lastUpdate: `Última actualización: ${lastUpdate}`,
  },
  {
    value: "en",
    title: "A simple example of multi-language using React",
    description:
      "A simple example of how the React Context API can be used to solve a project's internationalization problem",
    motivation: "Motivación",
    motivationText:
      "In a highly globalized world, we always have the possibility to scale our business beyond national borders. That is why our project must be prepared to be multi-language. But the question that arises is HOW to do it. This simple example seeks to document the solution to this problem using React's own resources. As best practices are discovered for solving multi-language, this example will be refactored. Last but not least, this example can give an initial idea to others who don't know where to start.",
    techologies: "Tecnologias",
    developedBy: `Developed by ${developerName}`,
    lastUpdate: `Last updated: ${lastUpdate}`,
  },
];
