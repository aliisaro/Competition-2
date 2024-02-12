import Rating from "./components/Rating.js";
import DriverCard from "./components/DriverCard.js";
import LikeButton from "./components/LikeButton.js";
import ClickablePicture from "./components/ClickablePicture.js";
import Dice from "./components/Dice.js";

export default function App() {
  return (
    <section>
      <h1>Iteration 1: Star rating</h1>
      <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>

      <br></br>

      <h1>Iteration 2: Driver card</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />

      <br></br>

      <h1>Iteration 3: Like Button</h1>
      <LikeButton />

      <br></br>

      <h1>Iteration 4: Clickable Picture</h1>
      <ClickablePicture img="maxence.png" imgClicked="maxence-glasses.png" />

      <br></br>

      <h1>Iteration 5: Dice</h1>
      <Dice />
    </section>
  );
}
