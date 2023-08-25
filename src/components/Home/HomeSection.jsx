import Image from "next/image";
// Import images
import phoneSm from "#/images/phone_home_sm.png";
import phoneLg from "#/images/phone_home_lg.png";

const HomeSection = () => {
  return (
    <section id="home" className="home text-white py-5">
      <div className="bar px-5 py-3 mt-5">
        <div className="container">
          <h2>نعلم لتعلم</h2>
        </div>
      </div>
      <div className="container position-relative mt-5">
        <p className="fs-5">
          قناة آي نيوز هي قناة إخبارية عامة تعنى بالشأن العراقي والإقليمي
          والدولي بتفصيلاته كافة تبث من جمهورية العراق.
        </p>

        <button className="btn rounded-0 text-white border py-2 my-4">
          حمل التطبيق الآن
        </button>

        <div
          className="position-absolute d-none d-lg-block"
          style={{
            top: "-175px",
            left: "185px",
          }}
        >
          <Image src={phoneSm} alt="phone-app-img" priority />
        </div>
        <div
          className="position-absolute d-none d-lg-block"
          style={{
            top: "-215px",
            left: "-30px",
          }}
        >
          <Image src={phoneLg} alt="phone-app-img" priority />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
