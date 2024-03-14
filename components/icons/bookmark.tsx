import * as React from "react";

function IconBookmark({ isActive }: { isActive: boolean }) {
  const fillColor = isActive ? "#0073DD" : "none";
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="none">
      <path
        fill={fillColor}
        stroke="#0073DD"
        strokeWidth="2"
        d="M6 5.25v20.61a1.14 1.14 0 0 0 1.795.934L15 21.75l7.205 5.044A1.14 1.14 0 0 0 24 25.86V5.25A2.25 2.25 0 0 0 21.75 3H8.25A2.25 2.25 0 0 0 6 5.25Z"
      />
    </svg>
  );
}

export default IconBookmark;
