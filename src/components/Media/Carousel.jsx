import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import getTrailers from "../../actions/getTrailers";
import Card from "./Card";
import settings from "./settings";

export default function Carousel() {
  const [trailers, setTrailers] = useState([]);
  const [backGround, setBackGround] = useState(null);

  useEffect(() => {
    async function fetch() {
      try {
        const results = await getTrailers();
        setTrailers(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    if (!backGround && trailers.length != 0) setBackGround(trailers[0].backdrop);
  }, [trailers]);

  return (
    <div className="backdrop" style={{ backgroundImage: `linear-gradient(rgba(3, 37, 65, 0.5), rgba(3, 37, 65, 0.5)), url(${backGround})` }}>
      <div className="carousel">
        <h2>Trailers</h2>
        <Slider {...settings}>
          {trailers.map((trailer) => (
            <Card key={trailer.id} trailer={trailer} setBackGround={setBackGround} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
