import React from "react";

interface IArrows {
  prevSlide: () => void;
  nextSlide: () => void;
}

const CarouselArrows: React.FC<IArrows> = ({
  prevSlide,
  nextSlide,
}: IArrows) => {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
};

export default CarouselArrows;
