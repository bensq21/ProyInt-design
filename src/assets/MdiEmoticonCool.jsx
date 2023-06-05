import React from 'react';

export function MdiEmoticonCool({ color, className }) {
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
        d="M3.22 7.22A9.984 9.984 0 0 1 12 2c3.79 0 7.09 2.11 8.78 5.22L20 8H4l-.78-.78M21.4 8.6c.38 1.07.6 2.21.6 3.4a10 10 0 0 1-10 10A10 10 0 0 1 2 12c0-1.19.22-2.33.6-3.4L4 10h1c0 1.38 2.12 2.5 3.5 2.5s2.75-1.12 2.75-2.5h1.5c0 1.38 1.37 2.5 2.75 2.5S19 11.38 19 10h1l1.4-1.4m-5.21 6.82L14.77 14c-.45.72-1.52 1.23-2.77 1.23S9.68 14.72 9.23 14l-1.42 1.42c.9 1.08 2.44 1.81 4.19 1.81c1.75 0 3.29-.73 4.19-1.81Z"
      ></path>
    </svg>
  );
}
export default MdiEmoticonCool;
