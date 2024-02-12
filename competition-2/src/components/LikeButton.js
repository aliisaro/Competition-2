import React, { useState } from "react";

function LikeButton() {
  const array = ["purple", "blue", "green", "yellow", "orange", "red"];

  //first button
  const [count1, setCount1] = useState(0);
  const [colorIndex1, setColorIndex1] = useState(0);

  const changeNumber1 = () => {
    setCount1(count1 + 1);
    setColorIndex1((colorIndex1 + 1) % array.length);
  };

  //second button
  const [count2, setCount2] = useState(0);
  const [colorIndex2, setColorIndex2] = useState(0);

  const changeNumber2 = () => {
    setCount2(count2 + 1);
    setColorIndex2((colorIndex2 + 1) % array.length);
  };

  return (
    <div class="like-button">
      <button
        style={{ backgroundColor: array[colorIndex1] }}
        onClick={changeNumber1}
      >
        {count1} Likes
      </button>
      <button
        style={{ backgroundColor: array[colorIndex2] }}
        onClick={changeNumber2}
      >
        {count2} Likes
      </button>
    </div>
  );
}

export default LikeButton;
