import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";

type IconName = "faPlay";

type IconProps = {
  icon: IconName;
  color: string;
  size: number;
};

const iconMapping: Record<IconName, IconDefinition> = {
  faPlay: faPlay,
};

export default function Icons({ icon, color, size }: IconProps) {
  return <FontAwesomeIcon icon={iconMapping[icon]} style={{ fontSize: size, color: color, pointerEvents: "none" }} />;
}
