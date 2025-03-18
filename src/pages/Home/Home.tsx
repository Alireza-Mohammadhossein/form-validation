import React from 'react';
import Slider from '../../components/Slider/Slider';
import Form from '../../components/Form/Form';
import './home.css';

const Home: React.FC = () => {
  return (
    <div className="home layer-container">
      <div className='layer'>
        <div className='grid grid-50'>
          <div className='grid-item'>
            <Slider />
          </div>
          
          <div className='grid-item'>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
