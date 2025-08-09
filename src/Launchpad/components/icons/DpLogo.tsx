type Props = {
  size: number;
};

const DpLogo = ({ size }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 16C0 7.16345 7.16344 0 16 0H80C88.8366 0 96 7.16344 96 16V80C96 88.8366 88.8366 96 80 96H16C7.16345 96 0 88.8366 0 80V16Z"
      fill="#1C3E86"
    />
    <path
      d="M17.9873 67.5574L35.1301 27.5576L52.2729 67.5574L35.1301 59.9384L17.9873 67.5574Z"
      fill="white"
    />
    <path
      d="M44.2734 27.5574L61.4162 67.5573L78.559 27.5574L61.4162 35.1764L44.2734 27.5574Z"
      fill="white"
    />
  </svg>
);

export default DpLogo;
