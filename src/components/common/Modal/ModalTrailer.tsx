import styles from "./ModalTrailer.module.css";

type TrailerProps = {
  video: string;
};

export default function Trailer({ video }: TrailerProps) {
  return <iframe className={styles.iframe} src={video} allowFullScreen></iframe>;
}
