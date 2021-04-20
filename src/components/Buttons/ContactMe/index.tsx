import { IoMailOutline } from "react-icons/io5";

import { ButtonContactMe } from "./styles";

export const ContactMe = () => (
  <ButtonContactMe
    href="https://github.com/"
    rel="noopener noreferrer"
    target="_blank"
  >
    <IoMailOutline size={28} />
    Fale comigo
  </ButtonContactMe>
);
