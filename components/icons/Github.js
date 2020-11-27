import * as React from "react";

function SvgGithub(props) {
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
        d="M12.5 17.5v-2.917c0-.833.083-1.166-.417-1.666 2.334-.25 4.584-1.167 4.584-5a3.833 3.833 0 00-1.084-2.667 3.5 3.5 0 00-.083-2.667s-.917-.25-2.917 1.084a10.25 10.25 0 00-5.166 0C5.417 2.333 4.5 2.583 4.5 2.583a3.5 3.5 0 00-.083 2.667 3.833 3.833 0 00-1.084 2.667c0 3.833 2.25 4.75 4.584 5-.5.5-.5 1-.417 1.666V17.5m0-1.667c-3.583 1.167-3.583-2.083-5-2.5l5 2.5z"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default SvgGithub;
