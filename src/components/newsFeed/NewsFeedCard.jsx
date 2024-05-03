import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function NewsFeedCard({
  item,
  setModelOpen,
  modelOpen,
  setModelData,
}) {
  const { messageBody, messageIssueTime, messageType, messageURL } = item;

  // Parse messageIssueTime into date and time components
  const dateObject = new Date(messageIssueTime);
  const dateString = dateObject.toLocaleDateString();
  const timeString = dateObject.toLocaleTimeString();

  // const [modelOpen, setModelOpen] = useState(false);

  const handelModel = () => {
    setModelOpen(!modelOpen);
    setModelData(item);
    console.log(item);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -100, y: 50 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0.5, 0.71, 1, 1.01],
      }}
      className="bg-gray-800 p-4 rounded-lg shadow-lg m-1 w-80 h-80 mx-auto font-sans text-white"
    >
      <div onClick={handelModel} className="cursor-pointer">
        <div className="flex items-center mb-2 justify-content-between">
          <p className="mr-2 ">{dateString}</p>
          <p>{timeString}</p>
        </div>
        <h3 className="font-bold mb-3 text-lg">{messageType}</h3>
        <p className="line-clamp-5 mb-5 p-1 text-m">{messageBody}</p>
      </div>
      <a className="p-2 bg-darkBG rounded" href={messageURL}>
        Go to NASA News
      </a>
    </motion.div>
  );
}

NewsFeedCard.propTypes = {
  item: PropTypes.object,
  setModelOpen: PropTypes.func,
  modelOpen: PropTypes.bool,
  setModelData: PropTypes.func,
};
