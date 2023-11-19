import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import './styles.scss';
import { useEffect, useRef, useState } from 'react';
import { sliderItems } from '../../data';

const Slider = () => {
  const slideElement = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    slideElement.current.style.transform = `translateX(${slideIndex * -100}vw)`;
  }, [slideIndex]);

  return (
    <div className="slider">
      <div className="container">
        <div className="wrapper" ref={slideElement}>
          {sliderItems.map((item) => (
            <div
              className="slide"
              style={{ backgroundColor: item.bg }}
              key={item.id}
            >
              <div className="img-container">
                <img src={item.img} className="image" />
              </div>
              <div className="info-container">
                <h1 className="title">{item.title}</h1>
                <p className="description">{item.desc}</p>
                <button className="button">SHOW NOW</button>
              </div>
            </div>
          ))}
        </div>

        <div
          onClick={() => handleClick('left')}
          className="arrow-container left"
        >
          <ArrowLeftOutlined />
        </div>

        <div
          onClick={() => handleClick('right')}
          className="arrow-container right"
        >
          <ArrowRightOutlined />
        </div>
      </div>
    </div>
  );
};

export default Slider;
