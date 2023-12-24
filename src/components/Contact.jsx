import "../styles/Contact.css";

function Contact() {
  return (
    <div id="contact" >
      <h1>Contact</h1>
      <img
        src={
          process.env.PUBLIC_URL + "/Screenshot 2023-12-24 at 12.00.55 PM.png"
        }
        alt="hii"
      />
    </div>
  );
}

export default Contact;
