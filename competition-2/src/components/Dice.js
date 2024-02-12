import React, { useState } from "react";

function Dice() {
  let array = [
    "dice-empty.png",
    "dice1.png",
    "dice2.png",
    "dice3.png",
    "dice4.png",
    "dice5.png",
    "dice6.png",
  ];

  const [random, setRandom] = useState(Math.floor(Math.random() * array.length));

  const randomize = () => {
    setRandom(setTimeout(array[Math.floor(Math.random() * array.length)], 1000));

  };

  return (
    <div class="dice">
      <img onClick={randomize} src={"./" + array[random]} alt="dice"></img>
    </div>
  );
}

export default Dice;
