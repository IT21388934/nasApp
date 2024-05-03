import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function Gimage({ title, image }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100, y: 50 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0.5, 0.71, 1, 1.01],
        }}
      >
        <motion.img
          src={image}
          alt="img"
          className="rounded w-full object-cover"
        />
        <div className="text-white text-center">{title}</div>
      </motion.div>
    </>
  );
}

Gimage.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
