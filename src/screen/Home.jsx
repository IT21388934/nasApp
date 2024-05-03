import { motion } from "framer-motion";
import homeImg from "../assets/homeImgNoBg.png";
import MainHeader from "../components/MainHeader/MainHeader";

import "./style.css"; // Assuming you have your Tailwind CSS styles in a separate file

const Home = () => {
  return (
    <div className="mx-auto h-screen relative">
      <MainHeader />
      <motion.div
        className="flex justify-center h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 70, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.5, 0.71, 1, 1.01],
        }}
      >
        <img
          src={homeImg}
          alt="banner"
          className="w-full object-cover homeImg"
        />
        <div className="text-white absolute textPosition top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-20 rounded p-20 ">
          <h1 className="text-6xl font-bold mb-2">Nasa Space</h1>
          <h3 className="text-2xl mb-3">Your Nasa view corner</h3>
          <p className="widthOfP">
            Explore a universe of knowledge with our curated collection of the
            latest news, awe-inspiring imagery, and real-time updates directly
            from NASA. From groundbreaking discoveries to stunning visuals and
            convenient access to NASAs resources, our platform offers an
            immersive experience for space enthusiasts and curious minds alike.
          </p>
        </div>
      </motion.div>

      {/* <Gallery /> */}
    </div>
  );
};

export default Home;
