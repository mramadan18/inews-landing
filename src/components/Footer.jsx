import Image from "next/image";
import Link from "next/link";
// Import images
import logo from "#/images/logo.png";
import googlePlay from "#/images/footer_google-play.png";
import appStore from "#/images/footer_app-store.png";
import facebook from "#/icons/footer_facebook.svg";
import twitter from "#/icons/footer_twitter.svg";
import youtube from "#/icons/footer_youtube.svg";
import telegram from "#/icons/footer_telegram.svg";
import linkedin from "#/icons/footer_linkedin.svg";
import instagram from "#/icons/footer_instagram.svg";
import location from "#/icons/location.svg";
import email from "#/icons/email.svg";
import phone from "#/icons/cell.svg";

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-4 mb-lg-0">
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-3 d-flex flex-column justify-content-center align-items-center gap-4">
            <Image src={logo} alt="iNEWS" priority />
            <p
              className="text-black fw-bold text-center"
              style={{
                lineHeight: "30px",
              }}
            >
              إخبارية عامة تعنى بالشأن العراقي والإقليمي والدولي بتفصيلاته كافة
              تبث من جمهورية العراق. على التردد 11258 H
            </p>

            <div className="d-flex justify-content-center align-items-center gap-3">
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image src={facebook} alt="facebook" priority />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image src={twitter} alt="twitter" priority />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image src={youtube} alt="youtube" priority />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image src={telegram} alt="telegram" priority />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image src={linkedin} alt="linkedin" priority />
              </div>
              <div
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "35px", height: "35px" }}
              >
                <Image src={instagram} alt="instagram" priority />
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 pe-5 my-5 my-lg-0">
            <h5 className="fw-bold mb-3 d-flex">حمل التطبيق</h5>
            <div className="d-flex flex-column justify-content-start align-items-center gap-3">
              <Image src={googlePlay} alt="download app for android" priority />
              <Image src={appStore} alt="download app for ios" priority />
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-3 pe-5 pe-lg-0">
            <h5 className="fw-bold mb-3">خريطة الموقع</h5>
            <div className="d-flex justify-content-start align-items-center gap-4">
              <div className="d-flex flex-column justify-content-center align-items-start gap-3">
                <a href="#home">الرئيسية</a>
                <a href="#features">مميزات التطبيق</a>
                <a href="#vision-message">الرؤية و الرسالة</a>
                <a href="#download-app">حمل تطبيق آي نيوز</a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-flex flex-column justify-content-start align-items-start gap-4 my-5 my-lg-0 px-5 px-lg-0">
            <h5 className="fw-bold mb-3">تواصل معنا</h5>
            <a
              href="http://"
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <Image src={location} alt="location-icon" priority />
              بغداد, Karrada, Iraq, 10069
            </a>
            <a
              href="mailto:info@i-news.tv"
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <Image src={email} alt="email-icon" priority />
              info@i-news.tv
            </a>
            <a
              href="tel:+9647730817679"
              className="d-flex justify-content-center align-items-center gap-2"
            >
              <Image src={phone} alt="phone-icon" priority />
              +964 773 081 7679
            </a>
          </div>
        </div>
      </div>
      <div
        className="copy-right mt-4 py-4 text-center"
        style={{
          borderTop: "1px solid #D2D2D2",
        }}
      >
        <p>جميع الحقوق محفوظة © 2023 شبكة آي نيوز الفضائية</p>
      </div>
    </footer>
  );
};

export default Footer;
