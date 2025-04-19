import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Icons({ icon, color, size }) {
  const icons = {
    faPlay: faPlay,
  };

  return <FontAwesomeIcon icon={icons[icon]} style={{ fontSize: size, color: color, pointerEvents: "none" }} />;
}
