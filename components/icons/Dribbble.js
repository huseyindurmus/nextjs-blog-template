import * as React from "react";

function SvgDribbble(props) {
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
        d="M10 17.5a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM7.5 3c4.167 5 5.833 8.75 6.25 13.5M5.333 15.833c2.917-2.916 5-5.416 12.084-5.333M2.583 8.958c4.167 0 8.179-.316 12.762-4.166"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgDribbble;
