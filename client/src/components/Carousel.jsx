import React from 'react';
import carouselStyle from './Carousel.css';

const Carousel = (props) => {
  const otherImages = props.images.slice(1);
  let imageCount = 0;
  return (
    <div className={carouselStyle.carouselContainer}> 
      {props.images.length === 0 ? '' : <img src={`${props.images[0].imageurl}`} className={carouselStyle.firstImageContainer} id={imageCount} onClick={props.renderImage} />}
      {otherImages.map((image, index) => (
        <img key={index} src={`${image.imageurl}`} className={carouselStyle.imageContainer} id={imageCount += 1} onClick={props.renderImage} />
      ))}
    </div>
  );
};

export default Carousel;
