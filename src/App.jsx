import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./screen/Home";
import SearchGallery from "./screen/searchGallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewFeedScreen from "./screen/newsFeed/NewFeedScreen";
import Login from "./screen/loginAndSngup/Login";
import Sign from "./screen/loginAndSngup/Sign";

function App() {
  const user = localStorage.getItem("userState");
  console.log("User: ", user);
  const currentUser = JSON.parse(user);
  return (
    <BrowserRouter>
      <Routes>
        {currentUser ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="search" element={<SearchGallery />} />
            <Route path="newsfeed" element={<NewFeedScreen />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Sign />} />
          </>
        )}
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
