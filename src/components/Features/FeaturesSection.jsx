import FeatureItem from "./FeatureItem";

const featuresData = [
  {
    id: 1,
    icon: "/icons/feature_1.svg",
    title: "تابع آخر الآخبار",
    desc: "ابقى على اطلاع مع الاخبار العاجلة طوال اليوم من خلال التطبيق .",
  },
  {
    id: 2,
    icon: "/icons/feature_2.svg",
    title: "اصنع قائمة متابعاتك",
    desc: "الاطلاع على المعلومات و آخر المستجدات بشأن اهتماماتك التي تحددها للتطبيق . ",
  },
  {
    id: 3,
    icon: "/icons/feature_3.svg",
    title: "فعل زر التنبيهات",
    desc: "الاطلاع على آخر المستجدات بشأن التوجهات اليومية الهامة، والأخبار وقت حدوثها خلال اليوم .",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <h3 className="text-center fw-bold">مميزات تطبيق آي نيوز</h3>
      <div className="container mt-5">
        <div className="row">
          {featuresData.map((feature) => (
            <FeatureItem key={feature.id} data={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
