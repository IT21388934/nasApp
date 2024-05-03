import "./style.css";
import Gimage from "../components/Gimage";
import { useState, useEffect } from "react";

export default function Gallery() {
  // Define a function to handle search

  const [imageData, setImageData] = useState([]);
  useEffect(() => {
    fetch("http://images-api.nasa.gov/search?q=mars")
      .then((res) => res.json())
      .then((data) => {
        const items = data.collection.items;

        setImageData(items);
      });
  }, []);

  console.log(imageData);
  return (
    <div className="mx-auto h-screen mt-20">
      <div className="text-white text-center title">Mars Celebration</div>
      <div className="flex justify-center h-full m-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {imageData.map((item) => (
            <Gimage
              key={item.data ? item.data[0].nasa_id : "default-id"}
              title={item.data ? item.data[0].title : "default-title"}
              image={item.links ? item.links[0].href : "default-image-url"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
