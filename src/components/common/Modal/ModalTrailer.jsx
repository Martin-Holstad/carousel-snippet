import styles from "./ModalTrailer.module.css";

export default function Trailer({ video }) {
  return <iframe className={styles.iframe} src={video} allowFullScreen></iframe>;
}
