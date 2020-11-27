import * as React from "react";

function SvgFigma(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM12.5 2.5h-5a2.5 2.5 0 000 5h5a2.5 2.5 0 000-5z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 12.5a2.5 2.5 0 01-1.768-4.268C6.202 7.763 9.337 8 10 8v4.5H7.5zm0 0A2.5 2.5 0 1010 15V2.5"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgFigma;
