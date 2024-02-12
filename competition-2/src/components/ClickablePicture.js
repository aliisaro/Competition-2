import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {

  const [imageSrc, setImageSrc] = useState(img);

  const change= () => {
    if (imageSrc === img) {
      setImageSrc(imgClicked);
    } else {
      setImageSrc(img);
    }
  }

  return (
    <div class="clickable-picture">
      <img onClick={change} src={"./" + imageSrc} alt="guy"></img>
    </div>
  );
}

export default ClickablePicture;
