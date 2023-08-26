import Image from "next/image";
// Import images
import vision from "#/icons/vision.svg";
import message from "#/icons/message.svg";

const ChannelVisionSection = () => {
  return (
    <section id="vision-message" className="vision-message">
      <div className="container">
        <div className="d-block d-lg-flex align-items-center">
          <div
            className="nav flex-row flex-lg-column flex-nowrap flex-lg-wrap justify-content-center gap-3 nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <div
              className="nav-link bg-transparent text-white pe-0 position-relative active"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true"
            >
              <Image
                src={vision}
                alt="vision-icon"
                width={24}
                height={24}
                priority
                className="ms-2"
              />
              رؤية قناة آي نيوز
            </div>
            <div
              className="nav-link bg-transparent pe-0 text-white position-relative"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
            >
              <Image
                src={message}
                alt="message-icon"
                width={24}
                height={24}
                priority
                className="ms-2 text-white"
              />
              رسالة قناة آي نيوز
            </div>
          </div>
          <div
            className="tab-content d-flex align-items-center"
            id="v-pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabIndex={0}
            >
              لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
              ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
              بروشور او فلاير او نماذج مواقع انترنت او غيرها . لوريم ايبسوم هو
              نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع
              النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير او
              نماذج مواقع انترنت او غيرها
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabIndex={0}
            >
              لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل
              ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ...
              بروشور او فلاير او نماذج مواقع انترنت او غيرها . لوريم ايبسوم هو
              نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع
              النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير او
              نماذج مواقع انترنت او غيرها
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChannelVisionSection;
