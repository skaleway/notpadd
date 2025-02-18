import { IconProps } from "@/lib/types";

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="50" height="50" fill="black" />
      <path
        d="M37.0091 36.79C37.0091 36.02 37.1041 35.405 37.2941 34.945C37.4941 34.475 37.8591 34.095 38.3891 33.805C38.7291 33.625 38.9841 33.46 39.1541 33.31C39.3341 33.15 39.4541 32.985 39.5141 32.815C39.5741 32.645 39.6041 32.44 39.6041 32.2C39.6041 31.85 39.4891 31.55 39.2591 31.3C39.0291 31.05 38.6541 30.925 38.1341 30.925C37.5641 30.925 37.1391 31.065 36.8591 31.345C36.5891 31.615 36.4191 32.03 36.3491 32.59L34.2191 32.485C34.2791 31.825 34.4691 31.245 34.7891 30.745C35.1191 30.235 35.5641 29.835 36.1241 29.545C36.6941 29.255 37.3641 29.11 38.1341 29.11C38.8941 29.11 39.5391 29.245 40.0691 29.515C40.5991 29.775 41.0041 30.135 41.2841 30.595C41.5741 31.055 41.7191 31.58 41.7191 32.17C41.7191 32.6 41.6541 32.97 41.5241 33.28C41.4041 33.59 41.2141 33.87 40.9541 34.12C40.6941 34.36 40.3591 34.6 39.9491 34.84C39.6591 35.01 39.4341 35.185 39.2741 35.365C39.1141 35.535 39.0041 35.735 38.9441 35.965C38.8841 36.185 38.8541 36.46 38.8541 36.79H37.0091ZM36.7841 40V37.735H39.1541V40H36.7841ZM29.0291 36.79C29.0291 36.02 29.1291 35.405 29.3291 34.945C29.5191 34.475 29.8791 34.095 30.4091 33.805C30.7491 33.625 31.0091 33.46 31.1891 33.31C31.3591 33.15 31.4741 32.985 31.5341 32.815C31.5941 32.645 31.6241 32.44 31.6241 32.2C31.6241 31.85 31.5091 31.55 31.2791 31.3C31.0491 31.05 30.6741 30.925 30.1541 30.925C29.5841 30.925 29.1641 31.065 28.8941 31.345C28.6141 31.615 28.4391 32.03 28.3691 32.59L26.2391 32.485C26.2991 31.825 26.4941 31.245 26.8241 30.745C27.1441 30.235 27.5891 29.835 28.1591 29.545C28.7191 29.255 29.3841 29.11 30.1541 29.11C30.9141 29.11 31.5591 29.245 32.0891 29.515C32.6191 29.775 33.0291 30.135 33.3191 30.595C33.5991 31.055 33.7391 31.58 33.7391 32.17C33.7391 32.6 33.6791 32.97 33.5591 33.28C33.4291 33.59 33.2341 33.87 32.9741 34.12C32.7141 34.36 32.3791 34.6 31.9691 34.84C31.6791 35.01 31.4541 35.185 31.2941 35.365C31.1341 35.535 31.0241 35.735 30.9641 35.965C30.9041 36.185 30.8741 36.46 30.8741 36.79H29.0291ZM28.8041 40V37.735H31.1741V40H28.8041Z"
        fill="white"
      />
    </svg>
  ),
  scroll: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 17H12.009"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M20 8.5V13.5C20 17.2712 20 19.1569 18.8284 20.3284C17.6569 21.5 15.7712 21.5 12 21.5C8.22876 21.5 6.34315 21.5 5.17157 20.3284C4 19.1569 4 17.2712 4 13.5V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M22 10.5L17.6569 6.33548C14.9902 3.77849 13.6569 2.5 12 2.5C10.3431 2.5 9.00981 3.77849 6.34315 6.33548L2 10.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="round"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  spotlight: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        stroke="currentColor"
        strokeMiterlimit="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        d="M17.638 11.58l3.06 3.67a.806.806 0 01.167.693l-1.248 5.616a.807.807 0 01-1.293.456l-2.973-2.246M6.362 11.58l-3.06 3.67a.807.807 0 00-.167.693l1.248 5.616a.808.808 0 001.293.456l2.973-2.246"
      ></path>
      <path
        stroke="currentColor"
        strokeMiterlimit="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.65 19.77c-5.785-9.761.914-16.1 2.854-17.6a.808.808 0 01.992 0c1.94 1.5 8.639 7.838 2.855 17.6H8.649zM13.615 23h-3.23"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        fill="currentColor"
        d="M12 11.693a1.211 1.211 0 100-2.423 1.211 1.211 0 000 2.423z"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  article: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_22634_9256)">
        <path
          d="M6 22V13.6944C6 12.1287 6 11.3459 6.21454 10.6077C6.42908 9.86948 6.84589 9.21812 7.6795 7.91542L10.3359 3.76419C11.0885 2.58806 11.4648 2 12 2C12.5352 2 12.9115 2.58806 13.6641 3.76419L16.3205 7.91542C17.1541 9.21812 17.5709 9.86948 17.7855 10.6077C18 11.3459 18 12.1287 18 13.6944V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M7 11C7.63152 11.3231 8.4887 11.9732 9.28009 11.9991C10.2988 12.0324 10.9868 11.1372 12 11.1372C13.0132 11.1372 13.7012 12.0324 14.7199 11.9991C15.5113 11.9732 16.3685 11.3231 17 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M12 12V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        ></path>
        <path
          d="M10 5H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_22634_9256">
          <rect width="24" height="24" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  ),
  jobs: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 15V16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M3 11L3.15288 13.8633C3.31714 17.477 3.39927 19.2839 4.55885 20.3919C5.71843 21.5 7.52716 21.5 11.1446 21.5H12.8554C16.4728 21.5 18.2816 21.5 19.4412 20.3919C20.6007 19.2839 20.6829 17.477 20.8471 13.8633L21 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M2.84718 10.4431C4.54648 13.6744 8.3792 15 12 15C15.6208 15 19.4535 13.6744 21.1528 10.4431C21.964 8.90056 21.3498 6 19.352 6H4.648C2.65023 6 2.03603 8.90056 2.84718 10.4431Z"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M15.9999 6L15.9116 5.69094C15.4716 4.15089 15.2516 3.38087 14.7278 2.94043C14.204 2.5 13.5083 2.5 12.1168 2.5H11.8829C10.4915 2.5 9.79575 2.5 9.27198 2.94043C8.7482 3.38087 8.52819 4.15089 8.08818 5.69094L7.99988 6"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  inbox: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.5 14.5H15.5M8.5 9.5H12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M14.1706 20.8905C18.3536 20.6125 21.6856 17.2332 21.9598 12.9909C22.0134 12.1607 22.0134 11.3009 21.9598 10.4707C21.6856 6.22838 18.3536 2.84913 14.1706 2.57107C12.7435 2.47621 11.2536 2.47641 9.8294 2.57107C5.64639 2.84913 2.31441 6.22838 2.04024 10.4707C1.98659 11.3009 1.98659 12.1607 2.04024 12.9909C2.1401 14.536 2.82343 15.9666 3.62791 17.1746C4.09501 18.0203 3.78674 19.0758 3.30021 19.9978C2.94941 20.6626 2.77401 20.995 2.91484 21.2351C3.05568 21.4752 3.37026 21.4829 3.99943 21.4982C5.24367 21.5285 6.08268 21.1757 6.74868 20.6846C7.1264 20.4061 7.31527 20.2668 7.44544 20.2508C7.5756 20.2348 7.83177 20.3403 8.34401 20.5513C8.8044 20.7409 9.33896 20.8579 9.8294 20.8905C11.2536 20.9852 12.7435 20.9854 14.1706 20.8905Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  search: (props: IconProps) => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17 17L21 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19C15.4183 19 19 15.4183 19 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  bell: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.52992 14.394C2.31727 15.7471 3.268 16.6862 4.43205 17.1542C8.89481 18.9486 15.1052 18.9486 19.5679 17.1542C20.732 16.6862 21.6827 15.7471 21.4701 14.394C21.3394 13.5625 20.6932 12.8701 20.2144 12.194C19.5873 11.2975 19.525 10.3197 19.5249 9.27941C19.5249 5.2591 16.1559 2 12 2C7.84413 2 4.47513 5.2591 4.47513 9.27941C4.47503 10.3197 4.41272 11.2975 3.78561 12.194C3.30684 12.8701 2.66061 13.5625 2.52992 14.394Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M9 21C9.79613 21.6219 10.8475 22 12 22C13.1525 22 14.2039 21.6219 15 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  plusImage: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 3C7.02166 3 4.78249 3 3.39124 4.39124C2 5.78249 2 8.02166 2 12.5C2 16.9783 2 19.2175 3.39124 20.6088C4.78249 22 7.02166 22 11.5 22C15.9783 22 18.2175 22 19.6088 20.6088C21 19.2175 21 16.9783 21 12.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M2 14.1354C2.61902 14.0455 3.24484 14.0011 3.87171 14.0027C6.52365 13.9466 9.11064 14.7729 11.1711 16.3342C13.082 17.7821 14.4247 19.7749 15 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M21 16.8962C19.8246 16.3009 18.6088 15.9988 17.3862 16.0001C15.5345 15.9928 13.7015 16.6733 12 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M22 6.25H14M18 2.25V10.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  video: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M2 11C2 7.70017 2 6.05025 3.02513 5.02513C4.05025 4 5.70017 4 9 4H10C13.2998 4 14.9497 4 15.9749 5.02513C17 6.05025 17 7.70017 17 11V13C17 16.2998 17 17.9497 15.9749 18.9749C14.9497 20 13.2998 20 10 20H9C5.70017 20 4.05025 20 3.02513 18.9749C2 17.9497 2 16.2998 2 13V11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M17 8.90585L17.1259 8.80196C19.2417 7.05623 20.2996 6.18336 21.1498 6.60482C22 7.02628 22 8.42355 22 11.2181V12.7819C22 15.5765 22 16.9737 21.1498 17.3952C20.2996 17.8166 19.2417 16.9438 17.1259 15.198L17 15.0941"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  pull: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="2.33341"
        cy="4.08341"
        rx="1.16667"
        ry="1.16667"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      ></ellipse>
      <ellipse
        cx="2.33341"
        cy="9.91667"
        rx="1.16667"
        ry="1.16667"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      ></ellipse>
      <line
        x1="5.41675"
        y1="3.91675"
        x2="11.5001"
        y2="3.91675"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      ></line>
      <line
        x1="5.41675"
        y1="9.75"
        x2="11.5001"
        y2="9.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      ></line>
    </svg>
  ),
  book: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6127 16.0847C13.9796 17.5678 12.4773 20.641 12 21.5001V8.00005C12.4145 7.25401 13.602 5.11651 15.6317 3.66373C16.4868 3.05172 16.9143 2.74571 17.4572 3.02473C18 3.30376 18 3.91968 18 5.15151V13.9915C18 14.6569 18 14.9896 17.8634 15.2234C17.7267 15.4572 17.3554 15.6664 16.6127 16.0847Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
      <path
        d="M12 7.80556C11.3131 7.08403 9.32175 5.3704 5.98056 4.76958C4.2879 4.4652 3.44157 4.31301 2.72078 4.89633C2 5.47965 2 6.42688 2 8.32133V15.1297C2 16.8619 2 17.728 2.4626 18.2687C2.9252 18.8095 3.94365 18.9926 5.98056 19.3589C7.79633 19.6854 9.21344 20.2057 10.2392 20.7285C11.2484 21.2428 11.753 21.5 12 21.5C12.247 21.5 12.7516 21.2428 13.7608 20.7285C14.7866 20.2057 16.2037 19.6854 18.0194 19.3589C20.0564 18.9926 21.0748 18.8095 21.5374 18.2687C22 17.728 22 16.8619 22 15.1297V8.32133C22 6.42688 22 5.47965 21.2792 4.89633C20.5584 4.31301 19 4.76958 18 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      ></path>
    </svg>
  ),
  quiz: (props: IconProps) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07617 7.99992L4.15951 5.9166M4.15951 5.9166L6.24283 3.83325M4.15951 5.9166L2.07617 3.83325M4.15951 5.9166L6.24283 7.99992"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M2.07617 15.1907L3.32617 16.3514L6.24284 13.6431"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <line
        x1="9.08398"
        y1="5.58325"
        x2="17.584"
        y2="5.58325"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      ></line>
      <line
        x1="9.08398"
        y1="14.75"
        x2="17.584"
        y2="14.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      ></line>
    </svg>
  ),
  github: (props: IconProps) => (
    <svg
      viewBox="0 0 256 250"
      width="256"
      height="250"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      width="256"
      height="262"
      viewBox="0 0 256 262"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      />
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      />
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      />
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      />
    </svg>
  ),
};
