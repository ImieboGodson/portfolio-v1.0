import { useEffect, useState } from "react";
import "./header.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [lightColor, setlightColor] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // console.log(window.scrollY);
      // console.log("width", window.innerWidth);

      if (
        (window.scrollY <= 300 && window.innerWidth <= 600) ||
        (window.scrollY <= 630 &&
          window.innerWidth >= 600 &&
          window.innerWidth <= 1024) ||
        (window.scrollY <= 700 && window.innerWidth > 1024)
      ) {
        setlightColor(true);
      } else {
        setlightColor(false);
      }
    });
  }, []);

  return (
    <div className="header">
      <div className="wrapper">
        <a
          href="/"
          className={`logo-link ${
            location.pathname.includes("projects") && lightColor
              ? "light"
              : "dark"
          }`}
        >
          <p className="logo-letters firstname">GODSON</p>
          <p className="logo-letters surname">IMIEBO</p>
        </a>
      </div>
    </div>
  );
};

export default Header;
