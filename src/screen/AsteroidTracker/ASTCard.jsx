import Proptype from "prop-types";
import "./style.css";
import { motion } from "framer-motion";

export default function ASTCard(data) {
  const item = data.data;
  // console.log(item);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.71, 1, 1.01],
      }}
    >
      <div className="card width300 bg-base-100 shadow-xl text-white">
        <div className="card-body h-full ">
          <h2 className="card-title">
            <div className="badge badge-primary">{item.name}</div>
          </h2>
          <div className="font-bold">estimated-diameter</div>

          <div className="block ml-2">
            <div>
              max: {item.estimated_diameter.meters.estimated_diameter_max}m
            </div>
            <div>
              min: {item.estimated_diameter.meters.estimated_diameter_min}m
            </div>
          </div>
        </div>
        <div className="justify-end mb-4 ml-4">
          <a className="p-2 bg-darkBG rounded" href={item.nasa_jpl_url}>
            Go to Nasa
          </a>
        </div>
      </div>
    </motion.div>
  );
}

ASTCard.propTypes = {
  data: Proptype.object,
};
