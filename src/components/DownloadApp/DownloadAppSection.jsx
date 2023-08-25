import Image from "next/image";
// Import images
import googlePlay from "#/images/google-play.png";
import appStore from "#/images/app-store.png";
import phoneSm from "#/images/phone_download_sm.png";
import phoneLg from "#/images/phone_download_lg.png";

const DownloadAppSection = () => {
  return (
    <section id="download-app" className="download-app">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="d-flex flex-column justify-content-center align-content-center gap-4">
              <h2 className="fw-bold">
                حمل تطبيق آي نيوز الآن و استمتع بكافة المزايا و تابع آخر الأخبار
                .
              </h2>
              <p className="fs-5">
                لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
                ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه
                ..لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على
                العميل
              </p>

              <div className="download-app-links d-flex justify-content-start align-items-center gap-3">
                <Image
                  className="android"
                  src={googlePlay}
                  width={220}
                  height={65}
                  alt="download app for android"
                  priority
                />
                <Image
                  className="ios"
                  src={appStore}
                  width={220}
                  height={80}
                  alt="download app for ios"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="phones-box position-relative">
              <div>
                <Image src={phoneSm} alt="phone-app-img" priority />
              </div>
              <div
                className="large-phone-box position-absolute"
                style={{
                  top: "-50px",
                  left: "150px",
                }}
              >
                <Image src={phoneLg} alt="phone-app-img" priority />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadAppSection;
