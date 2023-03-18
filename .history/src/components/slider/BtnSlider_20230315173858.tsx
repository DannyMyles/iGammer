import React from 'react'

const BtnSlider = () => {
  return (
    <button
    onClick={moveSlide}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
  >
    <img src={direction === "next" ? rightArrow : leftArrow} />
  </button>
  )
}

export default BtnSlider
