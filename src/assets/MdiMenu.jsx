import React from 'react';

export function MdiMenu({ color, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={className}
    >
      <path
        className={color}
        fill="currentColor"
        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
      ></path>
    </svg>
  );
}
export default MdiMenu;
