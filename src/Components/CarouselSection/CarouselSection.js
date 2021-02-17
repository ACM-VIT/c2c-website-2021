import image from "../../assets/Rectangle 5.svg";
import "./CarouselSection.css";
import register from "../../assets/register.svg";
import Carousel, { autoplayPlugin, slidesToShowPlugin, Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { useRef, useEffect, useState } from "react";
const CarouselSection = () => {
    const editorRef = useRef();
const [width,setWidth]=useState(0);
const [classa,setClass]=useState(" carousel-image flex items-center justify-center cursor-prev");
  useEffect(() => {
    setTimeout(() => {
      let rect = editorRef.current.getBoundingClientRect().width; 
      setWidth(rect);
    }, 300);
  }, []);
  console.log(width);
    const [MousePosition, setMousePosition] = useState({
      left: 0,
      top: 0,
    });

    function handleMouseMove(ev) {
      setMousePosition({ left: ev.pageX, top: ev.pageY });
      setClass("carousel-image flex items-center justify-center cursor-prev");
      console.log(MousePosition);

    }
  return (
    <article className="carouselsection">
      <div className="flex flex-col lg:flex-row items-center justify-center mx-auto py-28">
        <div
          ref={editorRef}
          onMouseMove={(ev) => handleMouseMove(ev)}
          className={classa}
        >
          <Carousel
            infinite
            onMouseMove={(ev) => handleMouseMove(ev)}
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
