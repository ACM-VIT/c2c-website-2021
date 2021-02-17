import image from "../../assets/Rectangle 5.svg";
import './CarouselSection.css';

const CarouselSection = () => {
    return(
        <div className="grid grid-rows-3 grid-flow-col gap-8 px-56 py-28 overflow-x-hidden">
            <div className="row-span-3 col-span-1 bg-white">
                <div style={{display: "flex"}}>
                    <img style={{display: "flex"}} className="carousel-image" src={image} alt="Carousel Image" />
                </div>
            </div>

            <div className=" carousel-text1 col-span-1">
                We're back with a bang,<br/>
                but <span style={{fontWeight: "900", color: "#48BA86"}}>let's flex first!</span>
            </div>
            <div className="row-span-2 col-span-1" style={{marginTop: "-50px"}}>
                <div className="carousel-text2" style={{background: "#6695D3"}}>5000+ participants</div>
                <div className="carousel-text2" style={{background: "#DE7979"}}>1000+ teams</div>
                <div className="carousel-text2" style={{background: "#CC9463"}}>10,000+ stickers distributed</div>
                <div className="carousel-text2" style={{background: "#6695D3"}}>10,000+ stickers distributed</div>
            </div>
        </div>

    );
}

export default CarouselSection;
