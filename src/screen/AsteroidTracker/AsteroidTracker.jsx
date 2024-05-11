import { useEffect, useState } from "react";
import axios from "axios";
import MainHeader from "../../components/MainHeader/MainHeader";
import ASTCard from "./ASTCard";

const apiKey = "k2AhhsqW4hqtQGU2RwubbiqZCgjivn5JqeioInbS";

export default function AsteroidTracker() {
  const [asteroids, setAsteroids] = useState([]);
  const startDate = "2021-10-10";
  const endDate = "2021-10-17";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${apiKey}`
        );
        setAsteroids(result.data.near_earth_objects[startDate]);
        console.log("Asteroids: ", result.data.near_earth_objects[startDate]);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Add additional error handling as needed
      }
    };

    fetchData();
  }, [startDate, endDate]);

  return (
    <div>
      <MainHeader />
      <h1 className="text-3xl font-bold text-white text-center mt-10">
        Asteroid Tracker
      </h1>
      <div className="app flex h-100 justify-center p-10">
        <div className="news-feed grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {asteroids.length === 0
            ? Array.from({ length: 8 }).map((index) => (
                <div key={index}>
                  <div className="flex flex-col gap-4 w-52">
                    <div className="skeleton h-96 w-100"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                  </div>
                </div>
              ))
            : asteroids.map((item) => <ASTCard key={item.id} data={item} />)}
        </div>
      </div>
    </div>
  );
}
