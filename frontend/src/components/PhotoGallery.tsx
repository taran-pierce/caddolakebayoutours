import { useRef, useState, useEffect } from 'react';
import Container from './Container';
import { CldImage } from 'next-cloudinary';

export default function PhotoGallery({ images }: { 
  images: any,
}) {
  const ref = useRef(null);
  const [carouselDimensions, setCarouselDimensions] = useState({
    height: null,
    width: null,
  });
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const { current }: any = ref; 

    setCarouselDimensions({
      height: current?.clientHeight,
      width: current?.clientWidth,
    });
  }, []);

  const Navigation = () => {
    return (
      <div role="group" aria-label="Slide controls">
        <button
          type="button"
          onClick={(e) => handleClick(e)}
          disabled={currentImage === 0}
        >Prev</button>
        <button
          type="button"
          onClick={(e) => handleClick(e)}
          disabled={currentImage === images.length - 1}
        >Next</button>
      </div>
    );
  };

  function handleClick(e: any) {
    e.preventDefault();

    const { target } = e;
    const isNext = target.innerHTML === 'Next';
    const isPrev = target.innerHTML === 'Prev';

    // TODO needs to account for no more slides left
    if (isNext) {
      setCurrentImage(currentImage + 1);
    }
    
    // TODO needs to account for first slide
    if (isPrev) {
      setCurrentImage(currentImage - 1);
    }
  }

  function handleDotNavigationClick(e: any) {
    e.preventDefault();

    const { target } = e;
    const slide = target?.dataset.slideNumber;

    setCurrentImage(slide);
  }

  return (
    <div>
      <Container>
        <h2>Pictures of Caddo Lake</h2>
        <div
          role="region"
          aria-label="Photo Gallery Carousel"
          ref={ref}
        >
          <Navigation />
          <div role="group" aria-roledescription="slide" aria-labelledby="carousel_item-1_heading">
             {images && carouselDimensions?.width && (
              <CldImage
                width={carouselDimensions.width}
                height={400}
                crop='pad'
                gravity='center'
                quality="50"
                src={images[currentImage].public_id}
                alt={`Testing`}
              />
             )}
          </div>
          <div>
            {images.map((image: any, index: number) => (
              <span
                key={image.asset_id}
                data-slide-number={index}
                onClick={(e) => handleDotNavigationClick(e)}
              >Item {index + 1}</span>
            ))}
          </div>
          <Navigation />
        </div>
      </Container>
    </div>
  );
}
