import { Link, NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/users">Users</NavLink>
      </li>

      <li>
        <NavLink to="/book">Books</NavLink>
      </li>
    </ul>
  );
};
// NavLink tự động thêm class active sáng xanh, mỗi lần click vào 1 trang, nó
// tự động thêm class active cho trang đó
export default Header;
