import { IoLogoGithub } from "react-icons/io5";

import { Link } from "./styles";

import { GetTextTranslated } from "../../../utils/getTextTranslated";
import { LinkToGithubTranslations } from "./translations";

export const LinkToGithub = () => (
  <Link
    href="https://github.com/daniel-hortencio/react-multi-language-simple-example"
    rel="noopener noreferrer"
    target="_blank"
  >
    <IoLogoGithub size={28} />
    {GetTextTranslated(LinkToGithubTranslations, "buttonGithub")}
  </Link>
);
