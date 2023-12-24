import "../styles/Nav.css";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="navbar">
      <h1>Kaitlyn's Bakery Co</h1>
      <div className="links">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={0}
        >
          <h3>About</h3>
        </Link>
        <Link
          to="gallery"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={0}
        >
          <h3>Gallery</h3>
        </Link>
        <Link
          to="ingredients"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={0}
        >
          <h3>Ingredients</h3>
        </Link>
        <Link
          to="contact"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          delay={0}
        >
          <h3>Contact</h3>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
