import Navbar from "@/components/Navbar";
import HomeSection from "@/components/Home/HomeSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import ChannelVisionSection from "@/components/ChannelVision/ChannelVisionSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer";
import Phones from "@/components/Phones";
import SocialMediaIcons from "@/components/Utilities/SocialMediaIcons";
import FollowUs from "@/components/FollowUs";
import { useState } from "react";
// import DownloadModal from "@/components/DownloadModal";

const Home = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Navbar />
      <HomeSection />
      <Phones />
      <FeaturesSection />
      <ChannelVisionSection />
      <DownloadAppSection />
      <Footer />
      <SocialMediaIcons />
      {show && <FollowUs setShow={setShow} />}
      {/* {show && <DownloadModal setShow={setShow} />} */}
    </>
  );
};

export default Home;
