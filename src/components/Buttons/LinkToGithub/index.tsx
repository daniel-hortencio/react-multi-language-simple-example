import { IoLogoGithub } from "react-icons/io5";

import { Link } from "./styles";

export const LinkToGithub = () => (
  <Link
    href="https://github.com/daniel-hortencio/react-multi-language-simple-example"
    rel="noopener noreferrer"
    target="_blank"
  >
    <IoLogoGithub size={28} />
    Ver no github
  </Link>
);
