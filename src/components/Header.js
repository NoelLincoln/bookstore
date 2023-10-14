import { NavLink } from 'react-router-dom';
import userIcon from './user.png';

const Header = () => (
  <>
    <nav>
      <div className="title-links">
        <h1>Bookstore CMS</h1>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Books</NavLink>
          </li>
          <li>
            <NavLink to="/categories">Categories</NavLink>
          </li>
        </ul>
      </div>
      <div className="user-icon">
        <img src={userIcon} alt="user icon" />
      </div>
    </nav>
  </>
);

export default Header;
