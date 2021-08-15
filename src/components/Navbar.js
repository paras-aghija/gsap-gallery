import "./Navbar.css";
import Menu from "../assets/menu.svg";
import Twitter from "../assets/twitter.svg";
import Instagram from "../assets/instagram.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Menu} alt="" className="menu" />
      <h1>Gallery</h1>
      <div className="socials">
        <img src={Twitter} alt="" />
        <img src={Instagram} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
