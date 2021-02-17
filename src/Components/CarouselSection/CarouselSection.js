import image from "../../assets/Rectangle 5.svg";
import "./CarouselSection.css";
import register from "../../assets/register.svg";
import Carousel, { autoplayPlugin, slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
const CarouselSection = () => {
  return (
    <article className="carouselsection">
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto py-28">
        <div className="carousel-image flex items-center justify-center">
          <Carousel
            infinite
            animationSpeed={3000}
            autoPlay={3000}
            clickToChange
            arrowLeft
          >
            <img src={image} alt="carousel-1" />
            <img src={image} alt="carousel-1" />
          </Carousel>
        </div>

        <div className="flex flex-col items-start">
          <div className="carousel-text1 lg:px-8">
            We're back with a bang,
            <br />
            but{" "}
            <span style={{ fontWeight: "900", color: "#48BA86" }}>
              let's flex first!
            </span>
          </div>
          <div className="lg:-ml-20 px-0 z-50">
            <div className="carousel-text2" style={{ background: "#6695D3" }}>
              5000+ participants
            </div>
            <div className="carousel-text2" style={{ background: "#DE7979" }}>
              1000+ teams
            </div>
            <div className="carousel-text2" style={{ background: "#CC9463" }}>
              10,000+ stickers distributed
            </div>
            <div className="carousel-text2" style={{ background: "#6695D3" }}>
              10,000+ stickers distributed
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CarouselSection;
