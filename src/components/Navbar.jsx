import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ShopHub</Link> 
      </div>
      <div className="navbar-links">
        <Link to="/">Products</Link> 
        <Link to="/cart">Cart</Link> 
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
