import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const Header = () => {
  return (
    <header className="App-header">
      <nav className="navbar navbar-expand justify-content-center">
        <ul className="navbar-nav ">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="new">
              New Entry
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="entries">
              Entries
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
