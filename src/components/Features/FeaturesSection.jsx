import FeatureItem from "./FeatureItem";

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <h3 className="text-center fw-bold">مميزات تطبيق آي نيوز</h3>
      <div className="container mt-5">
        <div className="row">
          <FeatureItem />
          <FeatureItem />
          <FeatureItem />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
