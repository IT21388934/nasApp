import { useState } from "react";
import Logo from "../../assets/nasaSpaceLogo.png";
import "./styles.css"; // Assuming you have your Tailwind CSS styles in a separate file
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { logOut } from "../../Redux/userRedux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function MainHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Change initial state to false
  const [linkOpen, setLinkOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLink = () => {
    setLinkOpen(!linkOpen);
  };

  const handleLogOut = () => {
    // Call the logOut action creator
    console.log("Logging out...");

    dispatch(logOut());

    // Redirect to login page
    navigate("/");
  };

  return (
    <header className="bg-transparent">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img className="p-1 m-3 w-10 cursor-pointer" src={Logo} alt="..." />
        </div>
        {/* Desktop nav bar */}
        <div className="deckNav">
          <div
            className={`nav-links duration-500 ${"md:static"} bg-transparent md:min-h-fit min-h-[60vh] left-0 ${"top-[9%]"} md:w-auto w-full flex items-center px-5`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link className="text-white mr-4 linkDesign" to={"/home"}>
                  Home
                </Link>

                <Link className="text-white linkDesign mr-4  " to={"/newsfeed"}>
                  News Feed
                </Link>

                <Link className="text-white linkDesign " to={"/search"}>
                  Gallery
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* mobile version dropdownDesign */}

        <div className="flex items-center gap-6">
          <div className="mobileNav">
            <TiThMenu className="icon" onClick={toggleLink} />
            {linkOpen && (
              <motion.div
                className="absolute top-5 right-0 bg-darkBG w-48 m-5 rounded text-white dropdownDesign "
                initial={{ opacity: 0, x: 50, scale: 0 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <ul className="flex flex-col gap-2 p-2 ">
                  <li>
                    <Link className="text-white mr-4 linkDesign" to={"/home"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white linkDesign " to={"/newsfeed"}>
                      News Feed
                    </Link>
                  </li>
                  <li>
                    <Link className="text-white linkDesign " to={"/search"}>
                      Gallery
                    </Link>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>

          <div
            className="border-50 w-8 h-8 rounded-full pointer cursor-pointer"
            onClick={toggleMenu}
          >
            <img
              className="w-full h-full rounded-full"
              src="https://th.bing.com/th/id/OIP.0yflR44HGV_WE2sZR4qi-gAAAA?rs=1&pid=ImgDetMain"
              alt="profile Image"
            />
          </div>
          {isMenuOpen && (
            <motion.div
              className="absolute top-5 right-0 bg-darkBG w-48 m-5 rounded text-white dropdownDesign "
              initial={{ opacity: 0, x: 50, scale: 0 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ul className="flex flex-col gap-2 p-2 ">
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li>
                <li>
                  <div onClick={handleLogOut} className="text-red-500">
                    Logout
                  </div>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </nav>
    </header>
  );
}
