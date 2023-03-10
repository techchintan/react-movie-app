import { IIcons } from "./icons";

const MoreOptionsIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "5"}
      height={height || "23"}
      viewBox="0 0 5 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 2.5C5 3.88071 3.88071 5 2.5 5C1.11929 5 0 3.88071 0 2.5C0 1.11929 1.11929 0 2.5 0C3.88071 0 5 1.11929 5 2.5Z"
        fill={fillColor || "#D4D7DD"}
      />
      <path
        d="M5 11.5C5 12.8807 3.88071 14 2.5 14C1.11929 14 0 12.8807 0 11.5C0 10.1193 1.11929 9 2.5 9C3.88071 9 5 10.1193 5 11.5Z"
        fill={fillColor || "#D4D7DD"}
      />
      <path
        d="M5 20.5C5 21.8807 3.88071 23 2.5 23C1.11929 23 0 21.8807 0 20.5C0 19.1193 1.11929 18 2.5 18C3.88071 18 5 19.1193 5 20.5Z"
        fill={fillColor || "#D4D7DD"}
      />
    </svg>
  );
};

export default MoreOptionsIcon;
