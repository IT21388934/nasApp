import { useState, useEffect } from "react";
import NewsFeedCard from "../../components/newsFeed/NewsFeedCard";
import "./style.css";
import MainHeader from "../../components/MainHeader/MainHeader";

export default function NewFeedScreen() {
  //get today date
  // const today = new Date();

  // const apiKey = "zx0c3zW7zEBBUcoOtADJ9RJi8o26GTefEWDCaOdn";
  // const apiKey = "c4V5mGGN1sB8fRxuzKzKJZc5mDhAXchjrcCxUuGY";
  const apiKey = "k2AhhsqW4hqtQGU2RwubbiqZCgjivn5JqeioInbS";
  const startDate = "2024-01-01";
  const endDate = "2024-01-07";
  const apiUrl = `https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=${apiKey}`;

  const [newsData, setNewsData] = useState([]);

  const [modelOpen, setModelOpen] = useState(false);

  const [modelData, setModelData] = useState({});

  useEffect(() => {
    console.log("fetching data");
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Process the data and display it in your news feed
        // console.log(data);
        setNewsData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <MainHeader />
      <h1 className="text-3xl font-bold text-white text-center mt-10">
        NASA News Feed
      </h1>
      <div className="app flex justify-center p-10">
        <div className="news-feed grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {newsData.length === 0
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
            : newsData.map((item) => (
                <NewsFeedCard
                  key={item.messageID}
                  item={item}
                  setModelOpen={setModelOpen}
                  modelOpen={modelOpen}
                  setModelData={setModelData}
                />
              ))}
        </div>
      </div>

      {/* model  */}
      {modelOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            {/* <!-- Modal overlay --> */}
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            {/* <!-- Modal content --> */}
            <div className="bg-gray-800 rounded-lg p-8 max-w-md mx-auto z-50 text-white">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  {modelData.messageType}
                </h2>
                {/* <!-- Close button --> */}
                <button
                  className="text-gray-500 hover:text-gray-700"
                  onClick={() => setModelOpen(!modelOpen)}
                >
                  Close
                </button>
              </div>
              {/* <p className="text-gray-700">Modal content goes here...</p> */}
              <div>
                <p className="line10 mb-5 p-1 text-m">
                  {modelData.messageBody}
                </p>
              </div>
              <a className="p-2 bg-darkBG rounded" href={modelData.messageURL}>
                Go to NASA News
              </a>
            </div>
          </div>
        </div>
        // </div>
      )}
    </>
  );
}
