import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

function Header() {
  return (
    <header>
      <h2>
        <Link to='/'>
          <FaCode size={30} />
          <span> CodeGig</span>
        </Link>
      </h2>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/gigs'>All Gigs</Link>
          </li>
          <li>
            <Link to='/add'>Add Gig</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
