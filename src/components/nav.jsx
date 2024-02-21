import { FaHome } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <main className="h-20 w-screen fixed">
      <div className="flex items-center justify-center gap-4 bg-black h-14 text-white">
        <input
          type="search"
          placeholder="Search"
          className="pl-1 h-7 text-white bg-transparent outline-none border-b border-white font-semibold font- text-lg"
        />
      </div>
      <div className="h-[91.2vh] overflow-hidden w-[3.1rem] hover:w-52 bg-black p-2">
        <div className="flex items-start justify-between flex-col h-full">
          <div className="flex flex-col gap-4">
            <span className="min-w-max">
              <NavLink
                to="home"
                className="text-white h-12 flex items-center justify-start font-sans rounded-md gap-5 font-semibold text-2xl hover:text-3xl focus:text-3xl"
              >
                <FaHome /> Home
              </NavLink>
            </span>
            <span className="min-w-max">
              <NavLink
                to="popular"
                className="text-white h-12 flex items-center justify-start font-sans rounded-md gap-5 font-semibold text-2xl hover:text-3xl focus:text-3xl"
              >
                <FaCheckCircle /> Popular
              </NavLink>
            </span>
            <span className="min-w-max">
              <NavLink
                to="upcomming"
                className="text-white h-12 flex items-center justify-start font-sans rounded-md gap-5 font-semibold text-2xl hover:text-3xl focus:text-3xl"
              >
                <FaHeart /> Upcoming
              </NavLink>
            </span>
          </div>
          {/* <span className="min-w-max">
            <NavLink
              to="signup"
              className="text-white h-12 flex items-center justify-start font-sans rounded-md gap-5 font-semibold text-2xl hover:text-3xl focus:text-3xl"
            >
              <FaUserCircle /> Sign-up
            </NavLink>
          </span> */}
        </div>
      </div>
    </main>
  );
};

export default Navbar;
