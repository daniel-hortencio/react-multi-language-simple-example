import * as S from "./styles";

interface IModalBackground {
  isOpen: boolean;
}

const ModalBackground: React.FC<IModalBackground> = ({ isOpen }) => (
  <S.Background isOpen={isOpen} />
);

export default ModalBackground;
