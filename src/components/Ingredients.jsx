import "../styles/Ingredients.css";

function Ingredients() {
  return (
    <div id="ingredients">
      <h1>Ingredients</h1>
      <img
        src={
          process.env.PUBLIC_URL + "/Screenshot 2023-12-24 at 12.00.55 PM.png"
        }
        alt="hii"
      />
    </div>
  );
}

export default Ingredients;
