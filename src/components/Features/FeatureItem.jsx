import Image from "next/image";
// Import images
import feature1 from "#/icons/feature_1.svg";
import feature2 from "#/icons/feature_2.svg";
import feature3 from "#/icons/feature_3.svg";

const FeatureItem = () => {
  return (
    <div className="col-lg-4 mt-4 mt-lg-0">
      <div className="feature-item py-3 px-4 d-flex flex-column justify-content-center align-items-start gap-3">
        <Image src={feature1} alt="feature-img" priority />
        <h4 className="fw-bold">تابع آخر الآخبار</h4>
        <p>ابقى على اطلاع مع الاخبار العاجلة طوال اليوم من خلال التطبيق .</p>
      </div>
    </div>
  );
};

export default FeatureItem;
