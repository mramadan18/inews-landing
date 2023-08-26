import Image from "next/image";

const FeatureItem = ({ data }) => {
  return (
    <div className="col-lg-4 mt-4 mt-lg-0">
      <div className="feature-item py-3 px-4 d-flex flex-column justify-content-center align-items-start gap-3">
        <Image
          src={data.icon}
          width={80}
          height={80}
          alt="feature-img"
          priority
        />
        <h4 className="fw-bold">{data.title}</h4>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
