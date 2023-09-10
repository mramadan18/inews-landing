import Image from "next/image";
// Import images
import googlePlay from "#/images/google-play.png";
import appStore from "#/images/app-store.png";

const DownloadModal = ({ setShow }) => {
  return (
    <div className="modal position-fixed top-0 start-0 z-3 w-100 h-100 bg-black d-flex justify-content-center align-items-center">
      <div className="bg-white">
        <div className="head d-flex justify-content-center align-items-center gap-4 px-2 text-white">
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

        <div className="d-flex flex-column justify-content-center align-items-center gap-4 py-4 px-3">
          <h5>حمل التطبيق من خلال المتجر</h5>
          <div className="download-app-links d-flex justify-content-start align-items-center gap-3">
            <Image
              className="android"
              src={googlePlay}
              width={170}
              height={55}
              alt="download app for android"
              priority
            />
            <Image
              className="ios"
              src={appStore}
              width={170}
              height={70}
              alt="download app for ios"
              priority
            />
          </div>

          <span className="or position-relative">أو</span>

          <button className="btn text-white rounded-0 py-2 px-4 w-100">
            زور موقعنا الرئيسي من هنا
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
