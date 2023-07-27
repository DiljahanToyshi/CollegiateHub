import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "./providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
console.log(user);
  return (
    <div className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="inline-flex items-center">
          <img src="../../public/logo.jpeg" width={36} alt="" />{" "}
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            Collegiate Hub{" "}
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className="items-center hidden space-x-8 lg:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Home
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/admission"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Admission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/colleges"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              Colleges
            </NavLink>
          </li>
        
          {user ? (
            <>
            <li>
            <NavLink
              to="/mycollege"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              My College
            </NavLink>
          </li>
              <button
                onClick={handleLogOut}
                className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-blue-900 hover:bg-blue-900 bg-blue-100 hover:text-white">
                LogOut
              </button>
              <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              {user?.displayName} Profile
            </NavLink>
          </li>

            </>
          ) : (
            <>
              <li>
                <>
                  {" "}
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }>
                    Log In
                  </NavLink>
                </>
              </li>
            
            </>
          )}
         
        </ul>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}>
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-40">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <img src="../../public/logo.jpeg" width="36" alt="" />{" "}
                      <span className="ml-2  text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Collegiate Hub{" "}
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}>
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }>
                        Home
                      </NavLink>
                    </li>
                    
                    <li>
                      <NavLink
                        to="/admission"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }>
                        Admission
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/colleges"
                        className={({ isActive }) =>
                          isActive ? "active" : "default"
                        }>
                        Colleges
                      </NavLink>
                    </li>
                    {user ? (
            <>
            <li>
            <NavLink
              to="/mycollege"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              My College
            </NavLink>
          </li>
              <button
                onClick={handleLogOut}
                className="font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-blue-900 hover:bg-blue-900 bg-blue-100 hover:text-white">
                LogOut
              </button>
              <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => (isActive ? "active" : "default")}>
              {user?.displayName} Profile
            </NavLink>
          </li>
            </>
          ) : (
            <>
              <li>
                <>
                  {" "}
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active" : "default"
                    }>
                    Log In
                  </NavLink>
                </>
              </li>
           
            </>
          )}
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
