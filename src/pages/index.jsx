import Navbar from "@/components/Navbar";
import HomeSection from "@/components/Home/HomeSection";
import FeaturesSection from "@/components/Features/FeaturesSection";
import ChannelVisionSection from "@/components/ChannelVision/ChannelVisionSection";
import DownloadAppSection from "@/components/DownloadApp/DownloadAppSection";
import Footer from "@/components/Footer";
import Phones from "@/components/Phones";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Phones />
      <FeaturesSection />
      <ChannelVisionSection />
      <DownloadAppSection />
      <Footer />
    </>
  );
};

export default Home;
