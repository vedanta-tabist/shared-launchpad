type Props = {
  size: number;
};

const UmsLogo = ({ size }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 96 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 16C0 7.16345 7.16344 0 16 0H80C88.8366 0 96 7.16344 96 16V80C96 88.8366 88.8366 96 80 96H16C7.16345 96 0 88.8366 0 80V16Z"
      fill="url(#paint0_linear_684_2511)"
    />
    <g filter="url(#filter0_d_684_2511)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.5 45.75C66.4706 45.75 70.5 41.7206 70.5 36.75C70.5 31.7794 66.4706 27.75 61.5 27.75C56.5295 27.75 52.5 31.7794 52.5 36.75C52.5 41.7206 56.5295 45.75 61.5 45.75ZM61.5 50.25C51.5589 50.25 43.5 58.3089 43.5 68.25H79.5C79.5 58.3089 71.4411 50.25 61.5 50.25Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33.6818 45.75C38.6524 45.75 42.6818 41.7206 42.6818 36.75C42.6818 31.7794 38.6524 27.75 33.6818 27.75C28.7112 27.75 24.6818 31.7794 24.6818 36.75C24.6818 41.7206 28.7112 45.75 33.6818 45.75ZM34.5 50.25C38.2548 50.25 41.741 51.3997 44.6259 53.3662C41.1246 57.3327 39 62.5432 39 68.25H16.5C16.5 58.3089 24.5589 50.25 34.5 50.25Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_684_2511"
        x="11"
        y="12"
        width="74"
        height="74"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_684_2511" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_684_2511"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_684_2511"
        x1="48"
        y1="0"
        x2="48"
        y2="96"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DDDDDD" />
        <stop offset="1" stopColor="#8F8F8F" />
      </linearGradient>
    </defs>
  </svg>
);

export default UmsLogo;
