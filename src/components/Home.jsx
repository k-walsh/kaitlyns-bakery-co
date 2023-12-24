import "../styles/Home.css";
import "../styles/Sections.css";
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
      <div className="content">
        <About />
        <Gallery />
        <Ingredients />
        <Contact />
      </div>

      <iframe
        // style={}
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FTvIxCM9tPTFSHq0tLKOGPi%2FKaitlyn's-Bakery-Co%3Ftype%3Ddesign%26node-id%3D3-8%26t%3DXhVa9Z2PSO3sYpiD-1%26scaling%3Dscale-down%26page-id%3D0%253A1%26mode%3Ddesign"
        allowfullscreen
        title="figma"
        className="figma"
      ></iframe>

      <Footer />
    </div>
  );
}

export default Home;
