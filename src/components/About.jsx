import "../styles/About.css";

function About() {
  return (
    <div id="about">
      <h1>About</h1>
      <img
        src={
          process.env.PUBLIC_URL + "/Screenshot 2023-12-24 at 12.00.55 PM.png"
        }
        alt="hii"
      />
    </div>
  );
}

export default About;
