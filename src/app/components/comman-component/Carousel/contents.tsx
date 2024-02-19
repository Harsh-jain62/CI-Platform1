import React, { Fragment } from "react";

type SliderContentProps = {
  sliderImage: any[];
  activeIndex: number;
};

const SliderContent: React.FC<SliderContentProps> = ({
  activeIndex,
  sliderImage,
}) => {
  return (
    <Fragment>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.path} alt="" />
          <h2 className="slide-title">"title"</h2>
          <h3 className="slide-text">{slide.description}</h3>
        </div>
      ))}
    </Fragment>
  );
};

export default SliderContent;
