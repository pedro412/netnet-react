import React from 'react';

const ComingSoonIcon = ({ width, height, fill }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M4 3C2.897 3 2 3.897 2 5V19C2 20.103 2.897 21 4 21H12V19H4V5H20V13.2852L22 14.4082V5C22 3.897 21.103 3 20 3H4ZM6.00195 7V9H8V7H6.00195ZM16 7V9H18V7H16ZM6 11V13H8V11H6ZM15.0859 13C14.514 13.019 14 13.492 14 14.1445V22.8555C14 23.7255 14.9132 24.2764 15.6602 23.8574L23.4199 19.502C24.1939 19.067 24.1939 17.932 23.4199 17.498L15.6602 13.1426C15.4734 13.0378 15.2766 12.9937 15.0859 13ZM6 15V17H8V15H6Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill={fill} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ComingSoonIcon;
