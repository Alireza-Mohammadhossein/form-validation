import React from 'react';
import './slider.css';
import sliderImage from '../../assets/images/slider.jpg';

const Slider: React.FC = () => {
  return (
    <div className='slider'>
      <img src={sliderImage} alt='Springload Team' className='slider-img' />
    </div>
  );
};

export default Slider;
