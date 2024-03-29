import { FC } from "react";

interface SubstitutionProps {
  width?: number;
  height?: number;
}

const Substitution: FC<SubstitutionProps> = ({ width = 24, height = 24 }) => {
  return (
    <svg
      fill="none"
      height={height}
      viewBox="0 0 25 24"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.32906 6.61592V15H9.67094V6.61592L12.5513 9.54961L13.5 8.58333L9 4L4.5 8.58333L5.44871 9.54961L8.32906 6.61592Z"
        fill="#239F30"
      />
      <path
        d="M16.6709 17.3841V9H15.3291L15.3291 17.3841L12.4487 14.4504L11.5 15.4167L16 20L20.5 15.4167L19.5513 14.4504L16.6709 17.3841Z"
        fill="#EE2323"
      />
    </svg>
  );
};

export default Substitution;
