function Rating({ children }) {
  let stars;

  if (children >= 0 && children < 0.5) {
    stars = "☆☆☆☆☆";
  } else if (children >= 0.5 && children < 1.5) {
    stars = "★☆☆☆☆";
  } else if (children >= 1.5 && children < 2.5) {
    stars = "★★☆☆☆";
  } else if (children >= 2.5 && children < 3.5) {
    stars = "★★★☆☆";
  } else if (children >= 3.5 && children < 4.5) {
    stars = "★★★★☆";
  } else if (children >= 4.5 && children < 5.5) {
    stars = "★★★★★";
  }
  return (
    <div class="star-rating">
      <p>{stars}</p>
    </div>
  );
}

export default Rating;
