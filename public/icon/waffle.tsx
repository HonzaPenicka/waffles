import { FunctionComponent } from "react";

interface WaffleProps {
  width: string;
  height: string;
}

export const WaffleIcon: FunctionComponent<WaffleProps> = ({
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="-45.5 0 347 347"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g>
        <path
          d="M184.778,249.117 C184.16,227.51 184.041,211.245 183.584,200.417 L256,128 L128.001,0 L0,127.999 L128.001,256 L149.977,234.023 C149.962,247.73 150.1,268.452 149.487,298.82 C149.103,317.911 144.213,321.585 142.697,332.27 C141.597,340.03 147.212,346.606 152.783,346.606 C158.354,346.606 163.393,340.152 162.869,332.27 C162.364,324.661 158.041,318.085 157.661,299.194 C156.944,263.623 156.818,241.165 156.273,227.728 L178.013,205.987 C178.008,216.475 178.102,230.774 177.583,248.885 C177.244,260.709 172.94,262.984 171.605,269.602 C170.636,274.408 175.58,278.481 180.484,278.481 C185.388,278.481 189.824,274.484 189.364,269.602 C188.919,264.889 185.113,260.817 184.778,249.117 L184.778,249.117 Z M168.941,98.98 L186.041,81.88 L203.14,98.98 L186.04,116.079 L168.941,98.98 L168.941,98.98 Z M174.12,128 L157.02,145.099 L139.921,128 L157.021,110.9 L174.12,128 L174.12,128 Z M157.021,87.06 L139.92,69.959 L157.02,52.859 L174.121,69.961 L157.021,87.06 L157.021,87.06 Z M145.101,98.98 L128.001,116.079 L110.901,98.98 L128,81.88 L145.101,98.98 L145.101,98.98 Z M98.981,87.059 L81.881,69.96 L98.981,52.86 L116.08,69.959 L98.981,87.059 L98.981,87.059 Z M87.06,98.98 L69.96,116.08 L52.86,98.98 L69.96,81.88 L87.06,98.98 L87.06,98.98 Z M98.981,110.9 L116.081,127.999 L98.98,145.1 L81.881,128 L98.981,110.9 L98.981,110.9 Z M87.06,157.02 L69.96,174.119 L52.861,157.02 L69.96,139.921 L87.06,157.02 L87.06,157.02 Z M98.98,168.94 L116.079,186.04 L98.98,203.139 L81.881,186.039 L98.98,168.94 L98.98,168.94 Z M110.9,157.02 L128.001,139.919 L145.1,157.019 L128,174.12 L110.9,157.02 L110.9,157.02 Z M157.021,168.939 L174.121,186.039 L157.02,203.14 L139.92,186.04 L157.021,168.939 L157.021,168.939 Z M168.941,157.019 L186.04,139.92 L203.14,157.02 L186.041,174.119 L168.941,157.019 L168.941,157.019 Z M215.06,145.1 L197.96,128 L215.06,110.9 L232.16,128 L215.06,145.1 L215.06,145.1 Z M145.099,40.939 L128,58.039 L110.901,40.94 L128.001,23.84 L145.099,40.939 L145.099,40.939 Z M40.94,110.899 L58.041,128 L40.941,145.1 L23.84,127.999 L40.94,110.899 L40.94,110.899 Z M110.901,215.059 L128,197.96 L145.099,215.061 L128.001,232.159 L110.901,215.059 L110.901,215.059 Z"
          fill="#FFD150"
        ></path>
      </g>
    </svg>
  );
};