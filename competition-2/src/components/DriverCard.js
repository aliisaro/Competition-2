function DriverCard ({ name, rating, img , car }){
    let stars;

    if (rating >= 0 && rating < 0.5) {
      stars = "☆☆☆☆☆";
    } else if (rating >= 0.5 && rating < 1.5) {
      stars = "★☆☆☆☆";
    } else if (rating >= 1.5 && rating < 2.5) {
      stars = "★★☆☆☆";
    } else if (rating >= 2.5 && rating < 3.5) {
      stars = "★★★☆☆";
    } else if (rating >= 3.5 && rating < 4.5) {
      stars = "★★★★☆";
    } else if (rating>= 4.5 && rating < 5.5) {
      stars = "★★★★★";
    }

    return (
        <div class="driver-card">
            <div class="info">
            <img src={img} alt="aPicture"/>
            <ul>
                <li>{name}</li>
                <li style={{fontSize: 30}}>{stars}</li>
                <li style={{fontSize: 15}}>{car.model} {car.licensePlate}</li>
            </ul>
            </div>
        </div>
      );
    }
    
    export default DriverCard;