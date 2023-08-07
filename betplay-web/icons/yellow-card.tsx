import { FC } from "react";

interface YellowCardProps {
  width?: number;
  height?: number;
}

const YellowCard: FC<YellowCardProps> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 24 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#F0DC28" height="20" width="14" x="5" y="2" />
    </svg>
  );
};

export default YellowCard;
