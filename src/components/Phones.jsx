import Image from "next/image";
// Import images
import phoneSm from "#/images/phone_download_sm.png";
import phoneLg from "#/images/phone_download_lg.png";

const Phones = () => {
  return (
    <div className="phones mt-4 d-block d-lg-none">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="d-flex justify-content-center align-items-center gap-3"
              style={{
                height: "320px",
              }}
            >
              <Image
                src={phoneSm}
                alt="phone-app-img"
                priority
                style={{
                  width: "180px",
                }}
              />
              <Image
                src={phoneLg}
                alt="phone-app-img"
                priority
                style={{
                  width: "180px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phones;
