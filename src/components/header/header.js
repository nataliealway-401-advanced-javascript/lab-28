import React from "react";
import { Link } from "react-router-dom";
/**
 * @class Header Component
 * Renders a header
 */
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1 id="header">RESTy</h1>
        <nav>
          <ul>
            <li className="links">
              <Link to="/">Home</Link>
            </li>
            <li className="links">
              <Link to="/history">History</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
