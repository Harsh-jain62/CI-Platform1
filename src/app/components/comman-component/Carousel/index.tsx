import React, { useEffect, useState } from "react";
import SliderContent from "./contents";
import sliderImages, {
} from "../../../utility/helper/carousel.images";
import "../../../styled/carousel.css";
import CarouselArrows from "./carousel.arrow";
import CarouselDots from "./carousel.dots";
const sliderImagecount = sliderImages.length - 1;

const Slider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sliderImage, setSliderImage] = useState<any>(sliderImages);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === sliderImagecount ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} sliderImage={sliderImage} />
      <CarouselArrows
        prevSlide={() =>
          setActiveIndex((prevIndex) =>
            prevIndex < 1 ? sliderImagecount : prevIndex - 1
          )
        }
        nextSlide={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === sliderImagecount ? 0 : prevIndex + 1
          )
        }
      />
      <CarouselDots
        activeIndex={activeIndex}
        sliderImage={sliderImage}
        onClick={(index) => setActiveIndex(index)}
      />
    </div>
  );
};

export default Slider;
