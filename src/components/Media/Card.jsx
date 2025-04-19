import { useState } from "react";
import styles from "./Card.module.css";
import { useAppContext } from "../../context/AppContext";
import Icons from "../common/Icons/Icons";
import ModalTrailer from "../common/Modal/ModalTrailer";

export default function Card({ key, trailer, setBackGround }) {
  const { setIsModalOpen, setModalContent } = useAppContext();
  const [isDragging, setIsDragging] = useState(false);

  function handleMouseDown() {
    setIsDragging(false);
  }

  function handleMouseMove() {
    setIsDragging(true);
  }

  function handleMouseUp(video) {
    if (!isDragging) {
      setIsModalOpen(true);
      setModalContent(<ModalTrailer video={video} />);
    }
  }

  return (
    <div key={key} className={styles.card} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={() => handleMouseUp(trailer.video)} onMouseOver={() => setBackGround(trailer.backdrop)}>
      <img src={trailer.backdrop} alt={trailer.title} />
      <p>{trailer.title}</p>
      <div className={styles.playIcon}>
        <Icons icon="faPlay" size="40" color="#ffff" />
      </div>
    </div>
  );
}
