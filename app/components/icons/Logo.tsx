import React from "react";
import { IconProps } from "./utils";

const Logo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 60 60"
        className={className}
        {...props}
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M13.9964 1V1.17182M13.9964 1.17182V37.6924L1 50.7477V1.17182H13.9964ZM16.6612 37.9416L3.56507 51H23.3426L36.569 37.6924V26.6014H23.5726V37.9416H16.6612ZM39.1341 37.9416L26.1377 51H53.8405L58.4576 46.3608V1.17182H45.4613V37.9416H39.1341ZM36.569 4.2646V15.2612H23.5726V4.2646H36.569Z"
          // stroke="#0cdbff"
          color="currentColor"
          fill={props.fill || props.color}
        />
      </svg>
    );
  }
);

export { Logo };
