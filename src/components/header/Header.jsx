import "./header.scss";
import { useLocation } from "react-router-dom";

const Header = () => {
  // const logoLetters = 'gi';
  const location = useLocation();

  return (
    <div className="header">
      <div className="wrapper">
        <a
          href="/"
          className={`logo-link ${
            location.pathname.includes("projects") ? "light" : "dark"
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
