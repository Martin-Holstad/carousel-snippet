import { useState, type Dispatch, type SetStateAction } from "react";
import styles from "./Card.module.css";
import { useAppContext } from "../../context/AppContext";
import { Trailer } from "../../types/Trailer";
import Icons from "../common/Icons/Icons";
import ModalTrailer from "../common/Modal/ModalTrailer";

type CardProp = {
  trailer: Trailer;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setBackGround: Dispatch<SetStateAction<string>>;
};

export default function Card({ trailer, setBackGround, setLoading }: CardProp) {
  const { setIsModalOpen, setModalContent } = useAppContext();
  const [isDragging, setIsDragging] = useState<boolean>(false);

  function handleMouseDown() {
    setIsDragging(false);
  }

  function handleMouseMove() {
    setIsDragging(true);
  }

  function handleMouseUp(video: string) {
    if (!isDragging) {
      setIsModalOpen(true);
      setModalContent(<ModalTrailer video={video} />);
    }
  }

  return (
    <div className={styles.card} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={() => handleMouseUp(trailer.video)} onMouseOver={() => setBackGround(trailer.backdrop)}>
      <img src={trailer.backdrop} alt={trailer.title} onLoad={() => setLoading(false)} />
      <p>{trailer.title}</p>
      <div className={styles.playIcon}>
        <Icons icon="faPlay" size={40} color="#ffff" />
      </div>
    </div>
  );
}
