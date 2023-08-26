import Image from "next/image";
// Import images
import facebook from "#/icons/facebook.png";
import twitter from "#/icons/twitter.png";
import youtube from "#/icons/youtube.png";
import telegram from "#/icons/telegram.png";
import linkedin from "#/icons/linkedin.png";
import instagram from "#/icons/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div
      className="position-fixed d-none d-lg-block z-2"
      style={{
        top: "17%",
        left: "40px",
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center gap-3">
        <a href="#">
          <Image
            className="animate-scale"
            src={facebook}
            width={40}
            height={40}
            alt="facebook"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src={twitter}
            width={40}
            height={40}
            alt="twitter"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src={youtube}
            width={40}
            height={40}
            alt="youtube"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src={telegram}
            width={40}
            height={40}
            alt="telegram"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src={linkedin}
            width={40}
            height={40}
            alt="linkedin"
          />
        </a>
        <a href="#">
          <Image
            className="animate-scale"
            src={instagram}
            width={40}
            height={40}
            alt="instagram"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
