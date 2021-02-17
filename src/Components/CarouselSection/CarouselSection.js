import image from "../../assets/Rectangle 5.svg";
import "./CarouselSection.css";

const CarouselSection = () => {
  return (
    <article className="carouselsection">
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto py-28">
        <div className="carousel-image">
          <img style={{ display: "flex" }} src={image} alt="Carousel" />{" "}
        </div>

        <div className="flex flex-col">
          <div className="carousel-text1 px-8">
            We're back with a bang,
            <br />
            but{" "}
            <span style={{ fontWeight: "900", color: "#48BA86" }}>
              let's flex first!
            </span>
          </div>
          <div className="lg:-ml-20">
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
