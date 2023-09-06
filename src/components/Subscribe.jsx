import Image from "next/image";
// Images
import logo from "#/images/logo.png";

const Subscribe = ({ setShow }) => {
  return (
    <div className="subscribe-modal position-fixed top-0 start-0 z-3 w-100 h-100 bg-black d-flex justify-content-center align-items-center text-white">
      <div
        className="bg-white"
        style={{
          width: "450px",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center gap-4 px-2"
          style={{
            backgroundColor: "var(--main-color)",
          }}
        >
          <h4>تابعنا عبر المنصات الخاصة بنا</h4>
          <button
            className="btn mb-5"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M16.6666 16.6668L3.33325 3.3335M16.6666 3.3335L3.33325 16.6668"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center gap-4 py-4">
          <Image src={logo} alt="inews" priority />

          <a
            href="#"
            className="d-flex justify-content-center align-items-center gap-3 py-2 px-5"
            style={{
              width: "90%",
              color: "var(--main-color)",
              border: "2px solid var(--main-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="24"
              viewBox="0 0 22 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.423018 0.368415C0.154395 0.658377 0 1.10467 0 1.68459V22.3122C0 22.8922 0.154395 23.3384 0.43306 23.6183L0.505864 23.6801L12.014 12.122V11.8623L0.495822 0.306641L0.423018 0.368415Z"
                fill="url(#paint0_linear_1187_3159)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8425 15.9901L12.0039 12.1336V11.8638L15.8437 8.00732L15.9266 8.05901L20.468 10.651C21.7685 11.3873 21.7685 12.6001 20.468 13.3464L15.9266 15.9384C15.9253 15.9384 15.8425 15.9901 15.8425 15.9901Z"
                fill="url(#paint1_linear_1187_3159)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9254 15.9377L12.004 11.998L0.423096 23.6293C0.846114 24.0857 1.55784 24.1374 2.35367 23.6911L15.9254 15.9377Z"
                fill="url(#paint2_linear_1187_3159)"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.9254 8.05962L2.35367 0.316375C1.55909 -0.14 0.846114 -0.0782255 0.423096 0.37815L12.0027 11.9981L15.9254 8.05962Z"
                fill="url(#paint3_linear_1187_3159)"
              />
              <path
                opacity="0.2"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8425 15.8545L2.36368 23.546C1.61053 23.981 0.93897 23.9507 0.50591 23.5561L0.433105 23.6293L0.50591 23.691C0.93897 24.0844 1.61053 24.1159 2.36368 23.6809L15.9354 15.9377L15.8425 15.8545Z"
                fill="black"
              />
              <path
                opacity="0.12"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.4669 13.2108L15.8325 15.8545L15.9154 15.9377L20.4568 13.3457C21.1071 12.9726 21.4272 12.4859 21.4272 11.998C21.3857 12.4443 21.0556 12.8692 20.4669 13.2108Z"
                fill="black"
              />
              <path
                opacity="0.25"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.35359 0.451228L20.4668 10.7865C21.0555 11.118 21.3856 11.553 21.4371 11.9993C21.4371 11.5126 21.117 11.0248 20.4668 10.6516L2.35359 0.316332C1.05315 -0.430005 0 0.191523 0 1.6842V1.81909C0 0.326418 1.05315 -0.285024 2.35359 0.451228Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1187_3159"
                  x1="10.9806"
                  y1="1.46286"
                  x2="-7.46396"
                  y2="6.35616"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00A0FF" />
                  <stop offset="0.007" stopColor="#00A1FF" />
                  <stop offset="0.26" stopColor="#00BEFF" />
                  <stop offset="0.512" stopColor="#00D2FF" />
                  <stop offset="0.76" stopColor="#00DFFF" />
                  <stop offset="1" stopColor="#00E3FF" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1187_3159"
                  x1="22.1603"
                  y1="11.9993"
                  x2="-0.316078"
                  y2="11.9993"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFE000" />
                  <stop offset="0.409" stopColor="#FFBD00" />
                  <stop offset="0.775" stopColor="#FFA500" />
                  <stop offset="1" stopColor="#FF9C00" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1187_3159"
                  x1="13.7931"
                  y1="14.1413"
                  x2="-1.10092"
                  y2="39.1003"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF3A44" />
                  <stop offset="1" stopColor="#C31162" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1187_3159"
                  x1="-2.4921"
                  y1="-6.49369"
                  x2="4.15258"
                  y2="4.65345"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#32A071" />
                  <stop offset="0.069" stopColor="#2DA771" />
                  <stop offset="0.476" stopColor="#15CF74" />
                  <stop offset="0.801" stopColor="#06E775" />
                  <stop offset="1" stopColor="#00F076" />
                </linearGradient>
              </defs>
            </svg>
            <h5>حمل التطبيق من جوجل بلاي</h5>
          </a>

          <a
            href="#"
            className="d-flex justify-content-center align-items-center gap-3 py-2 px-5"
            style={{
              width: "90%",
              color: "var(--main-color)",
              border: "2px solid var(--main-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1187_3169)">
                <path
                  d="M18.5496 12.7504C18.5833 16.3824 21.7358 17.5911 21.7707 17.6065C21.7441 17.6917 21.267 19.3288 20.1099 21.0199C19.1095 22.482 18.0714 23.9386 16.4359 23.9688C14.8289 23.9984 14.3122 23.0158 12.4749 23.0158C10.6382 23.0158 10.0641 23.9386 8.54289 23.9984C6.96426 24.0582 5.7621 22.4175 4.75352 20.9608C2.69252 17.9811 1.11749 12.5409 3.23236 8.86873C4.28298 7.0451 6.16052 5.8903 8.19842 5.86069C9.7486 5.83112 11.2117 6.9036 12.1594 6.9036C13.1065 6.9036 14.8845 5.61385 16.7538 5.80327C17.5363 5.83584 19.7329 6.11936 21.1433 8.18392C21.0296 8.25437 18.5224 9.71399 18.5496 12.7504ZM15.5294 3.83196C16.3676 2.81747 16.9316 1.4052 16.7778 0C15.5697 0.0485541 14.1089 0.805021 13.2423 1.81896C12.4658 2.71684 11.7857 4.15397 11.9692 5.53135C13.3157 5.63553 14.6913 4.8471 15.5294 3.83196Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1187_3169">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h5>حمل التطبيق من آبل ستـور</h5>
          </a>

          <a
            href="#"
            className="d-flex justify-content-center align-items-center gap-3 py-2 px-5"
            style={{
              width: "90%",
              color: "var(--main-color)",
              border: "2px solid var(--main-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M16.86 14C16.94 13.34 17 12.68 17 12C17 11.32 16.94 10.66 16.86 10H20.24C20.4 10.64 20.5 11.31 20.5 12C20.5 12.69 20.4 13.36 20.24 14M15.09 19.56C15.69 18.45 16.15 17.25 16.47 16H19.42C18.4512 17.6683 16.9141 18.932 15.09 19.56ZM14.84 14H10.16C10.06 13.34 10 12.68 10 12C10 11.32 10.06 10.65 10.16 10H14.84C14.93 10.65 15 11.32 15 12C15 12.68 14.93 13.34 14.84 14ZM12.5 19.96C11.67 18.76 11 17.43 10.59 16H14.41C14 17.43 13.33 18.76 12.5 19.96ZM8.5 8H5.58C6.53886 6.32721 8.0748 5.06149 9.9 4.44C9.3 5.55 8.85 6.75 8.5 8ZM5.58 16H8.5C8.85 17.25 9.3 18.45 9.9 19.56C8.07862 18.9317 6.54485 17.6677 5.58 16ZM4.76 14C4.6 13.36 4.5 12.69 4.5 12C4.5 11.31 4.6 10.64 4.76 10H8.14C8.06 10.66 8 11.32 8 12C8 12.68 8.06 13.34 8.14 14M12.5 4.03C13.33 5.23 14 6.57 14.41 8H10.59C11 6.57 11.67 5.23 12.5 4.03ZM19.42 8H16.47C16.157 6.76146 15.6936 5.5659 15.09 4.44C16.93 5.07 18.46 6.34 19.42 8ZM12.5 2C6.97 2 2.5 6.5 2.5 12C2.5 14.6522 3.55357 17.1957 5.42893 19.0711C6.35752 19.9997 7.45991 20.7362 8.67317 21.2388C9.88642 21.7413 11.1868 22 12.5 22C15.1522 22 17.6957 20.9464 19.5711 19.0711C21.4464 17.1957 22.5 14.6522 22.5 12C22.5 10.6868 22.2413 9.38642 21.7388 8.17317C21.2362 6.95991 20.4997 5.85752 19.5711 4.92893C18.6425 4.00035 17.5401 3.26375 16.3268 2.7612C15.1136 2.25866 13.8132 2 12.5 2Z"
                fill="#012A83"
              />
            </svg>
            <h5>زور موقعنا الرئيسي من هنا </h5>
          </a>

          <a
            href="#"
            className="d-flex justify-content-center align-items-center gap-3 py-2 px-5"
            style={{
              width: "90%",
              color: "var(--main-color)",
              border: "2px solid var(--main-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M20.9 0H4.1C2.11177 0 0.5 1.61177 0.5 3.6V20.4C0.5 22.3882 2.11177 24 4.1 24H20.9C22.8882 24 24.5 22.3882 24.5 20.4V3.6C24.5 1.61177 22.8882 0 20.9 0Z"
                fill="#1877F2"
              />
              <path
                d="M17.1688 15.4688L17.7031 12H14.375V9.75C14.375 8.80312 14.8391 7.875 16.3297 7.875H17.8438V4.92188C17.8438 4.92188 16.4703 4.6875 15.1578 4.6875C12.4156 4.6875 10.625 6.34688 10.625 9.35625V12H7.57812V15.4688H10.625V24H14.375V15.4688H17.1688Z"
                fill="white"
              />
            </svg>
            <h5>زور صفحتنا على فيـسبوك</h5>
          </a>

          <a
            href="#"
            className="d-flex justify-content-center align-items-center gap-3 py-2 px-5"
            style={{
              width: "90%",
              color: "var(--main-color)",
              border: "2px solid var(--main-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.8571 0H5.14286C2.30254 0 0 2.30254 0 5.14286V18.8571C0 21.6975 2.30254 24 5.14286 24H18.8571C21.6975 24 24 21.6975 24 18.8571V5.14286C24 2.30254 21.6975 0 18.8571 0Z"
                fill="url(#paint0_radial_1187_3182)"
              />
              <path
                d="M18.8571 0H5.14286C2.30254 0 0 2.30254 0 5.14286V18.8571C0 21.6975 2.30254 24 5.14286 24H18.8571C21.6975 24 24 21.6975 24 18.8571V5.14286C24 2.30254 21.6975 0 18.8571 0Z"
                fill="url(#paint1_radial_1187_3182)"
              />
              <path
                d="M18.8571 0H5.14286C2.30254 0 0 2.30254 0 5.14286V18.8571C0 21.6975 2.30254 24 5.14286 24H18.8571C21.6975 24 24 21.6975 24 18.8571V5.14286C24 2.30254 21.6975 0 18.8571 0Z"
                fill="url(#paint2_radial_1187_3182)"
              />
              <path
                d="M17.9992 7.28571C17.9992 7.99577 17.4235 8.57143 16.7134 8.57143C16.0034 8.57143 15.4277 7.99577 15.4277 7.28571C15.4277 6.57563 16.0034 6 16.7134 6C17.4235 6 17.9992 6.57563 17.9992 7.28571Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.9988 16.2858C14.3658 16.2858 16.2846 14.367 16.2846 12.0001C16.2846 9.63316 14.3658 7.71436 11.9988 7.71436C9.63193 7.71436 7.71313 9.63316 7.71313 12.0001C7.71313 14.367 9.63193 16.2858 11.9988 16.2858ZM11.9988 14.5715C13.419 14.5715 14.5703 13.4203 14.5703 12.0001C14.5703 10.5799 13.419 9.42864 11.9988 9.42864C10.5786 9.42864 9.42742 10.5799 9.42742 12.0001C9.42742 13.4203 10.5786 14.5715 11.9988 14.5715Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.42773 11.6573C3.42773 8.77703 3.42773 7.33685 3.98827 6.23676C4.48133 5.26907 5.26809 4.48231 6.23579 3.98925C7.33588 3.42871 8.77605 3.42871 11.6563 3.42871H12.342C15.2223 3.42871 16.6624 3.42871 17.7625 3.98925C18.7302 4.48231 19.517 5.26907 20.01 6.23676C20.5706 7.33685 20.5706 8.77703 20.5706 11.6573V12.343C20.5706 15.2233 20.5706 16.6634 20.01 17.7635C19.517 18.7312 18.7302 19.518 17.7625 20.011C16.6624 20.5716 15.2223 20.5716 12.342 20.5716H11.6563C8.77605 20.5716 7.33588 20.5716 6.23579 20.011C5.26809 19.518 4.48133 18.7312 3.98827 17.7635C3.42773 16.6634 3.42773 15.2233 3.42773 12.343V11.6573ZM11.6563 5.143H12.342C13.8105 5.143 14.8086 5.14433 15.5802 5.20737C16.3318 5.26877 16.7162 5.38007 16.9843 5.51669C17.6294 5.8454 18.1539 6.3699 18.4826 7.015C18.6192 7.28311 18.7306 7.66745 18.7919 8.41908C18.8549 9.19068 18.8563 10.1888 18.8563 11.6573V12.343C18.8563 13.8115 18.8549 14.8096 18.7919 15.5812C18.7306 16.3328 18.6192 16.7172 18.4826 16.9853C18.1539 17.6304 17.6294 18.1549 16.9843 18.4836C16.7162 18.6202 16.3318 18.7315 15.5802 18.7929C14.8086 18.8559 13.8105 18.8573 12.342 18.8573H11.6563C10.1878 18.8573 9.18971 18.8559 8.41811 18.7929C7.66648 18.7315 7.28213 18.6202 7.01402 18.4836C6.36893 18.1549 5.84442 17.6304 5.51571 16.9853C5.3791 16.7172 5.2678 16.3328 5.20639 15.5812C5.14336 14.8096 5.14202 13.8115 5.14202 12.343V11.6573C5.14202 10.1888 5.14336 9.19068 5.20639 8.41908C5.2678 7.66745 5.3791 7.28311 5.51571 7.015C5.84442 6.3699 6.36893 5.8454 7.01402 5.51669C7.28213 5.38007 7.66648 5.26877 8.41811 5.20737C9.18971 5.14433 10.1878 5.143 11.6563 5.143Z"
                fill="white"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_1187_3182"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(8.57143 18) rotate(-55.3758) scale(21.8739)"
                >
                  <stop stopColor="#B13589" />
                  <stop offset="0.79309" stopColor="#C62F94" />
                  <stop offset="1" stopColor="#8A3AC8" />
                </radialGradient>
                <radialGradient
                  id="paint1_radial_1187_3182"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(7.71429 24.8571) rotate(-65.1363) scale(19.3665)"
                >
                  <stop stopColor="#E0E8B7" />
                  <stop offset="0.444662" stopColor="#FB8A2E" />
                  <stop offset="0.71474" stopColor="#E2425C" />
                  <stop offset="1" stopColor="#E2425C" stopOpacity="0" />
                </radialGradient>
                <radialGradient
                  id="paint2_radial_1187_3182"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(-1.28571 0.857143) rotate(-8.1301) scale(33.3351 7.13002)"
                >
                  <stop offset="0.156701" stopColor="#406ADC" />
                  <stop offset="0.467799" stopColor="#6A45BE" />
                  <stop offset="1" stopColor="#6A45BE" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
            <h5>زور صفحتنا على إنستجرام</h5>
          </a>

          <a
            href="#"
            className="d-flex justify-content-center align-items-center gap-3 py-2 px-5"
            style={{
              width: "90%",
              color: "var(--main-color)",
              border: "2px solid var(--main-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20.4 0H3.6C1.61177 0 0 1.61177 0 3.6V20.4C0 22.3882 1.61177 24 3.6 24H20.4C22.3882 24 24 22.3882 24 20.4V3.6C24 1.61177 22.3882 0 20.4 0Z"
                fill="#37AEE2"
              />
              <path
                d="M9.32812 18.9375C8.8125 18.9375 8.85938 18.75 8.71875 18.2812L7.21875 13.3594L18.7031 6.60938"
                fill="#C8DAEA"
              />
              <path
                d="M9.32812 18.9375C9.65625 18.9375 9.84375 18.75 10.0781 18.5625L12.1875 16.5469L9.5625 14.9531"
                fill="#A9C9DD"
              />
              <path
                d="M9.56216 14.9531L15.8903 19.5937C16.5465 20.0156 17.109 19.7812 17.2965 18.9375L19.8747 6.84371C20.109 5.81246 19.4528 5.34371 18.7497 5.67184L3.70278 11.4843C2.71841 11.8593 2.71841 12.4687 3.51528 12.7031L7.40591 13.9218L16.3122 8.24996C16.734 8.01559 17.109 8.10934 16.8278 8.43746"
                fill="#F6FBFE"
              />
            </svg>
            <h5>زور صفحتنا على تيليجرام</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
