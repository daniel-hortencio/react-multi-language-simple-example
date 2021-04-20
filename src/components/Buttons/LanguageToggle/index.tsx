import { useState, useEffect } from "react";
import { IoLanguage, IoClose } from "react-icons/io5";
import { IOptionLanguage } from "../../../hooks/LanguageProvider/types";
import { useLanguage } from "../../../hooks/LanguageProvider";
import { OptionsLanguage } from "../../../languages";
import * as S from "./styles";

import Modal from "../../ModalBackground";

import { LanguageToggleTranslations } from "./translations";
import { GetTextTranslated } from "../../../utils/getTextTranslated";

export const LanguageToggle = () => {
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  function handleSelectLanguage(option: IOptionLanguage) {
    setSelectedLanguage(option);
    setIsOpen(false);
  }

  return (
    <>
      <S.ToggleContainer isOpen={isOpen}>
        <S.Row>
          <S.Toggle onClick={() => setIsOpen(true)} disabled={isOpen}>
            <IoLanguage size={24} />
            {/* {selectedLanguage.label} */}
            {GetTextTranslated(LanguageToggleTranslations, "label")}
          </S.Toggle>
          <S.ButtonClose onClick={() => setIsOpen(false)} disabled={!isOpen}>
            <IoClose size={24} />
          </S.ButtonClose>
        </S.Row>

        <S.LanguagesOptions isOpen={isOpen} total={OptionsLanguage.length}>
          <div>
            {OptionsLanguage.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelectLanguage(option)}
              >
                {
                  LanguageToggleTranslations.find(
                    (translation) => translation.value === option.value
                  )?.label
                }
              </button>
            ))}
          </div>
        </S.LanguagesOptions>
      </S.ToggleContainer>
      <Modal isOpen={isOpen} />
    </>
  );
};
