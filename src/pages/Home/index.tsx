import { SiStyledComponents, SiReact, SiTypescript } from "react-icons/si";
import { HomePageTranslations } from "./translations";
import { useLanguage } from "../../hooks/LanguageProvider";

import { GetTextTranslated } from "../../utils/getTextTranslated";

import * as S from "./styles";

import {
  LinkToGithub,
  ContactMe,
  LanguageToggle,
} from "../../components/Buttons";

const App = () => {
  const { selectedLanguage } = useLanguage();

  const usedTechnologies = [
    { icon: <SiReact size={32} />, legend: "React" },
    { icon: <SiTypescript size={32} />, legend: "Typescript" },
    { icon: <SiStyledComponents size={32} />, legend: "Styled Components" },
  ];

  return (
    <S.Home>
      <S.Background>
        <S.Container>
          <header>
            <LanguageToggle />
          </header>
          <section>
            <h1>{GetTextTranslated(HomePageTranslations, "title")}</h1>
            <p>{GetTextTranslated(HomePageTranslations, "description")}</p>

            <h2>{GetTextTranslated(HomePageTranslations, "motivation")}</h2>
            <p>{GetTextTranslated(HomePageTranslations, "motivationText")}</p>

            <h2>{GetTextTranslated(HomePageTranslations, "techologies")}</h2>
            <S.Row>
              {usedTechnologies.map((technology) => (
                <S.Techology>
                  {technology.icon}
                  <figcaption>{technology.legend}</figcaption>
                </S.Techology>
              ))}
            </S.Row>
          </section>

          <footer>
            <S.Row>
              <LinkToGithub />
              {/* <ContactMe /> */}
            </S.Row>
            <small>
              {GetTextTranslated(HomePageTranslations, "developedBy")} /{" "}
              {GetTextTranslated(HomePageTranslations, "lastUpdate")}
            </small>
          </footer>
        </S.Container>
      </S.Background>
    </S.Home>
  );
};

export default App;
