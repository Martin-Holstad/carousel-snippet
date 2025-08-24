import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { type Trailer } from "../../types/Trailer";
import getTrailers from "../../actions/getTrailers";
import Card from "./Card";
import settings from "./settings";

export default function Carousel() {
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [backGround, setBackGround] = useState<string>("");

  useEffect(() => {
    async function fetch() {
      try {
        const results: Trailer[] = await getTrailers();
        setTrailers(results);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    if (!backGround && trailers.length != 0) return setBackGround(trailers[0].backdrop);
  }, [trailers, backGround]);

  return (
    <div className="carouselContainer">
      <motion.div
        className="backdrop"
        key={backGround}
        initial={{ opacity: 0.1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          backgroundImage: `linear-gradient(rgba(3, 37, 65, 0.5), rgba(3, 37, 65, 0.5)), url(${backGround})`,
        }}
      />
      {trailers.length > 0 && (
        <div className="carousel">
          <h2>Trailers</h2>
          <Slider {...settings}>
            {trailers.map((trailer) => (
              <Card key={trailer.id} trailer={trailer} setBackGround={setBackGround} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
