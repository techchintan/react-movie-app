import { IIcons } from "./icons";

const LogoutIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "16"}
      height={height || "16"}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4444 4.44444L11.1911 5.69778L12.5956 7.11111H5.33333V8.88889H12.5956L11.1911 10.2933L12.4444 11.5556L16 8L12.4444 4.44444ZM1.77778 1.77778H8V0H1.77778C0.8 0 0 0.8 0 1.77778V14.2222C0 15.2 0.8 16 1.77778 16H8V14.2222H1.77778V1.77778Z"
        fill="#D4D7DD"
        className={fillColor}
      />
    </svg>
  );
};

export default LogoutIcon;
