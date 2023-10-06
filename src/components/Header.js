import { NavLink } from 'react-router-dom';

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
        <p>User icon</p>
      </div>
    </nav>
  </>
);

export default Header;
