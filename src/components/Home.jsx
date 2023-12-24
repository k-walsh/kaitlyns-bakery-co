import "../styles/Home.css";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Gallery from "./Gallery";
import Ingredients from "./Ingredients";
import Nav from "./Nav";

function Home() {
  return (
    <div>
      <Nav />
      <div className="intro">
        <img
          src={
            process.env.PUBLIC_URL + "/Screenshot 2023-12-24 at 12.00.55 PM.png"
          }
          alt="hii"
        />
        <h3>Sweet. Custom. Simple. Beautiful.</h3>
      </div>
      <About />
      <Gallery />
      <Ingredients />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
