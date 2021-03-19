import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from 'reactstrap';

const items = [
  {
    id: 1,
    src: "https://cf.shopee.vn/file/a3c7a91512dc7d083a4aaa989656895e_xxhdpi",
    altText: 'Slide 1'
  },
  {
    id: 2,
    src: "https://cf.shopee.vn/file/fa12360747f5d0e510f2a0be28822093_xxhdpi",
    altText: 'Slide 2'
  },
  {
    id: 3,
    src: "https://cf.shopee.vn/file/f53405fc6835381e6a003970be6dff2e_xxhdpi",
    altText: 'Slide 3'
  }
];

const Advertisement = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  const src = 'https://salt.tikicdn.com/cache/w408/ts/banner/aa/3b/b3/403c766e847f8a4509ad21f6cadcb6bb.jpg';
  return (
    <div style={{ display: 'flex', 
                  marginTop : 50, 
                  marginLeft : 100,
                  marginBottom: 70}}>
      <div style={{width: 800, display: 'inline-block'}}>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
      </div>
      <div className="advertisement-picture" 
          style={{display: 'inline-block',
          width : "408px",
          height: "270px",
          marginLeft: "20px",
          backgroundImage : `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover" }} />
    </div>
  );
}

export default Advertisement;