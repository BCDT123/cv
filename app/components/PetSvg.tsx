"use client";
import * as React from "react";
import { SVGProps } from "react";
import { motion } from "framer-motion";

export const PetSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    // width={133}
    // height={201}
    viewBox="0 0 133 201"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Good-boy">
      <g id="Body">
        <g id="Hind Leg">
          <g id="Hind Leg_2">
            <path
              id="Rectangle 26"
              d="M25.9998 194C25.9998 191.239 28.2384 189 30.9998 189H47.9998V194H25.9998V194Z"
              fill="black"
            />
            <rect
              id="Rectangle 22"
              width={20.223}
              height={48.4798}
              rx={10.1115}
              transform="matrix(0.974853 -0.222847 0.299646 0.95405 21.0474 148.507)"
              fill="black"
            />
          </g>
          <g id="Hind Leg_3">
            <path
              id="Rectangle 26_2"
              d="M107.289 194C107.289 191.239 105.05 189 102.289 189H85.2887V194H107.289V194Z"
              fill="black"
            />
            <rect
              id="Rectangle 22_2"
              width={20.223}
              height={48.4798}
              rx={10.1115}
              transform="matrix(-0.974853 -0.222847 -0.299646 0.95405 112.241 148.507)"
              fill="black"
            />
          </g>
        </g>
        <path
          id="Body_2"
          d="M45.1495 116.051C46.9074 105.629 55.9317 98 66.5 98V98C77.0683 98 86.0926 105.629 87.8505 116.051L95.2612 159.981C98.2632 177.776 84.5471 194 66.5 194V194C48.4529 194 34.7368 177.776 37.7388 159.981L45.1495 116.051Z"
          fill="#45484B"
        />
        <g id="Fur spot">
          <path
            id="Vector 138"
            d="M45 146C54.1398 143.471 63.1088 133.623 66.7857 126L66.8462 194C59.574 180.114 45.5112 145.842 45 146Z"
            fill="#DEDBDA"
          />
          <path
            id="Vector 139"
            d="M88 145C79.3654 142.438 70.2594 133.723 66.7857 126L66.8462 194C73.7163 179.931 87.517 144.839 88 145Z"
            fill="#DEDBDA"
          />
        </g>
        <g id="Paw">
          <path
            id="Rectangle 43"
            d="M55.3439 184H44.9376C42.0639 184 38 188.477 38 194H62.2815C62.2815 188.477 58.2175 184 55.3439 184Z"
            fill="#B8B6B7"
          />
          <path
            id="Vector 85"
            d="M44.0703 194C44.0703 191 44.0703 186 46.0938 185"
            stroke="black"
          />
          <path
            id="Vector 86"
            d="M55.1994 194C55.1994 191 55.1994 186 53.1759 185"
            stroke="black"
          />
        </g>
        <g id="Paw_2">
          <path
            id="Rectangle 44"
            d="M88.3439 184H77.9376C75.0639 184 71 188.477 71 194H95.2815C95.2815 188.477 91.2175 184 88.3439 184Z"
            fill="#DEDBDA"
          />
          <path
            id="Vector 87"
            d="M77.0703 194C77.0703 191 77.0703 186 79.0938 185"
            stroke="black"
          />
          <path
            id="Vector 88"
            d="M88.1994 194C88.1994 191 88.1994 186 86.1759 185"
            stroke="black"
          />
        </g>
      </g>
      <motion.g
        id="Head"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          type: "keyframes",
        }}
      >
        <path
          id="Face"
          d="M98.9592 96.7962C103.119 117.595 87.2107 137 66 137C44.7893 137 28.881 117.595 33.0408 96.7962L41.1414 56.2932C43.385 45.075 53.235 37 64.6753 37H67.3247C78.7651 37 88.615 45.075 90.8586 56.2932L98.9592 96.7962Z"
          fill="#E5E5E2"
        />
        <motion.g
          id="Left Ear"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            type: "keyframes",
          }}
        >
          <path
            id="Left Ear/2"
            d="M31 32H49.9762C57.0621 32 60.6499 40.5317 55.6936 45.5957L36.7174 64.9844C31.703 70.1078 23 66.5575 23 59.3887V40C23 35.5817 26.5817 32 31 32Z"
            fill="black"
          />
        </motion.g>
        <motion.g
          id="Right Ear"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            type: "keyframes",
          }}
        >
          <path
            id="Right Ear/2"
            d="M101 32H82.0238C74.9379 32 71.3501 40.5317 76.3064 45.5957L95.2826 64.9844C100.297 70.1078 109 66.5575 109 59.3887V40C109 35.5817 105.418 32 101 32Z"
            fill="black"
          />
        </motion.g>
        <g id="Eyes">
          <path
            id="Fur Spot"
            d="M60.5 80.9205C60.5 85.1082 55.7432 88.5029 51.4189 88.949C45.8252 89.5259 44.5 85.1082 44.5 80.9205C44.5 76.7328 48.6562 72 52.7162 72C56.7763 72 60.5 76.7328 60.5 80.9205Z"
            fill="black"
          />
          <circle id="Ellipse 2" cx={52.5} cy={84} r={3} fill="white" />
          <circle id="Ellipse 3" cx={78.5} cy={84} r={3} fill="black" />
        </g>
        <g id="Nose">
          <g id="Fur">
            <path
              id="Vector 104"
              d="M27.5 101.711C37.65 94.3524 58.5833 96.4496 65 100V111C55.2 111.775 44.4167 123.481 40.625 128C39.225 127.613 37.125 122.691 37.125 121.077C34.675 121.077 32.0208 124.628 31 126.403C29.95 120.593 32.6042 113.654 34.0625 110.91C32.3125 110.136 30.125 112.524 29.25 113.815C27.85 111.491 30.7083 106.714 32.3125 104.616C31.2625 102.68 28.6667 101.873 27.5 101.711Z"
              fill="white"
            />
            <path
              id="Vector 105"
              d="M103.5 101.752C93.35 94.3128 71.4167 96.4111 65 100V111.05C74.8 111.833 84.8333 123.432 88.625 128C90.025 127.608 93.875 122.959 93.875 121.328C96.325 121.328 98.9792 124.917 100 126.711C101.05 120.838 98.3958 113.824 96.9375 111.05C98.6875 110.267 100.875 112.682 101.75 113.987C103.15 111.638 100.292 106.809 98.6875 104.688C99.7375 102.73 102.333 101.915 103.5 101.752Z"
              fill="white"
            />
          </g>
          <g id="Mouth">
            <path
              id="Vector 108"
              d="M65.5 113V116C65.1667 117.333 61.3 122 56.5 122"
              stroke="black"
            />
            <path
              id="Vector 109"
              d="M65.5 113V116C65.875 117.333 69.1 122 74.5 122"
              stroke="black"
            />
          </g>
          <ellipse id="Nose_2" cx={65.5} cy={107} rx={9} ry={6} fill="black" />
        </g>
      </motion.g>
    </g>
  </svg>
);
//export { PetSvg as ReactComponent };
