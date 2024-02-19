import React from "react";

interface ISliderDots {
  sliderImage: any;
  onClick: (index: number) => void;
  activeIndex: number;
}

const CarouselDots: React.FC<ISliderDots> = ({
  activeIndex,
  onClick,
  sliderImage,
}: ISliderDots) => {
  return (
    <div className="all-dots">
      {/* {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))} */}
    </div>
  );
};

export default CarouselDots;
