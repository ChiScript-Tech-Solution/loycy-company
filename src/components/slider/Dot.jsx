

import React from "react";

const  Dots = ({ activeIndex, onclick, SliderImage }) => {
  return (
    <div className="all-dots">
      {SliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;