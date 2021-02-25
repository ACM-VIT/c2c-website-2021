import image1 from "../../assets/carousel-images/img1.jpg";
import image2 from "../../assets/carousel-images/img2.JPG";
import image3 from "../../assets/carousel-images/img3.JPG";
import image4 from "../../assets/carousel-images/img4.JPG";
import image5 from "../../assets/carousel-images/img5.JPG";
import image6 from "../../assets/carousel-images/img6.jpg";
import image7 from "../../assets/carousel-images/img7.jpg";
import image8 from "../../assets/carousel-images/img8.jpg";
import image9 from "../../assets/carousel-images/img9.jpg";
import image10 from "../../assets/carousel-images/img10.JPG";
import image16 from "../../assets/carousel-images/img16.JPG";
import image17 from "../../assets/carousel-images/img17.JPG";
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import {useEffect} from 'react'
// import { Parallax } from 'react-scroll-parallax';

import "./CarouselSection.css";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Plx from "react-plx";


const CarouselSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger); 
      const trigger = window.innerWidth >=700 ? ".marquee":"#cStart";  
      const start = window.innerWidth >=700 ? "top top" :"top top+=180";  
      console.log(trigger);
      gsap.to(".cdiv",{
        opacity:1,
        duration :3,
        stagger:0.8,
        scrollTrigger: {
          trigger,
          start ,
          end: "+=40%",
          scrub:true,
        },
      },0);
  }, [])

  return (
      <article className="carouselsection">
        <div className="flex flex-col lg:flex-row items-center justify-center mx-auto mt-32 mb-0">
          <div className="carousel-image flex items-center justify-center z-20">
            <Carousel
              infinite
              animationSpeed={1000}
              autoPlay={4000}
              clickToChange
              arrowLeft={<button id="leftArr"></button>}
              arrowRight={<button id="rightArr"></button>}
              addArrowClickHandler
            >
              <img src={image1} alt="carousel-img-1" />
              <img src={image2} alt="carousel-img-1" />
              <img src={image3} alt="carousel-img-3" />
              <img src={image4} alt="carousel-img-4" />
              <img src={image5} alt="carousel-img-5" />
              <img src={image6} alt="carousel-img-6" />
              <img src={image7} alt="carousel-img-7" />
              <img src={image8} alt="carousel-img-8" />
              <img src={image9} alt="carousel-img-9" />
              <img src={image10} alt="carousel-img-10" />
              <img src={image16} alt="carousel-img-11" />
              <img src={image17} alt="carousel-img-12" />
            </Carousel>
          </div>

          <div id="cStart" className="flex flex-col items-start mt-6 lg:mt-0">
            <div className="carousel-text1 lg:px-8">
              We're back with a bang,
              <br />
              but{" "}
              <span style={{ fontWeight: "900", color: "#48BA86" }}>
                let's flex first! 
              </span>
            </div>
            <div className="lg:-ml-20 z-50">
              <div className="cdiv carousel-text2" style={{ background: "#DE7979" }}>
                1000+ teams
              </div>
              <div className="cdiv carousel-text2" style={{ background: "#6695D3" }}>
                5000+ participants
              </div>
              <div className="cdiv carousel-text2" style={{ background: "#CC9463" }}>
                10,000+ stickers distributed
              </div>
              <div className="cdiv carousel-text2" style={{ background: "#6695D3" }}>
                25+ sponsors
              </div>
            </div>
          </div>
        </div>
        <div id="sLink"></div>
      </article>
  );
};

export default CarouselSection;