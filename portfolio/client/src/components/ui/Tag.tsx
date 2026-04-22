import "./Tag.css";
import { ProjectCategory } from "../../types";

interface TagProps {
  label?: string;
  color?: "blue" | "green" | "pink" | "yellow" | "purple" | "orange";
  type?: ProjectCategory;
}

const typeColors: Record<
  NonNullable<TagProps["type"]>,
  NonNullable<TagProps["color"]>
> = {
  "embedded systems": "pink",
  "web development": "orange",
  cybersecurity: "purple",
  "mobile development": "yellow",
  IT: "blue",
  "full-stack": "purple",
};

const Tag = ({ label, color, type }: TagProps) => {
  const tagColor = color || (type ? typeColors[type] : "gray");

  return (
    <div className={`tag-container mono-caption-md ${tagColor}`}>
      {label ? label : type}
    </div>
  );
};

export default Tag;
