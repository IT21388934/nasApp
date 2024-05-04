import { useState } from "react";
import Gimage from "../components/Gimage";
import SearchBar from "../components/search/SearchBar";
import { DotLoader } from "react-spinners";
import MainHeader from "../components/MainHeader/MainHeader";

export default function SearchGallery() {
  const [imageData, setImageData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Add isLoading state

  // Define a function to handle search
  const handleSearch = (searchTerm) => {
    setIsLoading(true); // Set isLoading to true when starting the fetch

    // Fetch data from the API
    fetch(`https://images-api.nasa.gov/search?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        const items = data.collection.items;

        setImageData(items);
        setIsLoading(false); // Set isLoading to false when data is fetched
      });
  };

  return (
    <>
      <MainHeader />
      <div className="mx-auto h-screen mt-10 ">
        <div className="h-full">
          <div className="flex justify-center mb-4">
            {/* Render the search bar component */}
            <SearchBar onSearch={handleSearch} />
          </div>

          <div className="flex justify-center h-full m-20">
            {isLoading ? ( // Render the loading animation if isLoading is true
              // <div className="text-center">Loading...</div>

              <DotLoader color="#1712b0" />
            ) : (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                {imageData.map((item) => (
                  <Gimage
                    key={item.data ? item.data[0].nasa_id : "default-id"}
                    title={item.data ? item.data[0].title : "default-title"}
                    image={
                      item.links ? item.links[0].href : "default-image-url"
                    }
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
