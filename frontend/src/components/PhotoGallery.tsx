import {
  useRef,
  useState,
  useEffect,
} from 'react';
import { CldImage } from 'next-cloudinary';
import Container from './Container';
import { getWindowDimensions } from '@/utils/getDimensions';

import styles from './photoGallery.module.scss';

export default function PhotoGallery({ images }: { 
  images: any,
}) {
  const ref = useRef(null);
  const [carouselDimensions, setCarouselDimensions] = useState({
    height: null,
    width: null,
  });
  const [currentImage, setCurrentImage] = useState(0);

  const {
    height,
    width,
  } = getWindowDimensions();

  const isMobile = width && width <= 768;

  useEffect(() => {
    const { current }: any = ref; 

    setCarouselDimensions({
      height: current?.clientHeight,
      width: current?.clientWidth,
    });
  }, []);

  const CarouselNavigation = () => {
    return (
      <div
        role="group"
        aria-label="Slide controls"
        className={styles.navigation}
      >
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

  const CarouselPagination = ({
    currentSlide,
    clickHandler,
    images,
  }: {
    currentSlide: number,
    clickHandler: any,
    images: any,
  }) => {
    return (
      <div className={styles.paginationWrapper}>
        {images.map((image: any, index: any) => (
          <span
            key={index}
            data-slide-number={index}
            onClick={(e) => clickHandler(e)}
            className={`${styles.pagination} ${index == currentSlide ? styles.active : ''}`}
          />
        ))}
      </div>
    );
  };

  function handleClick(e: any) {
    e.preventDefault();

    const { target } = e;
    const isNext = target.innerHTML === 'Next';
    const isPrev = target.innerHTML === 'Prev';

    if (isNext) {
      setCurrentImage(currentImage + 1);
    }
    
    if (isPrev) {
      setCurrentImage(currentImage - 1);
    }
  }

  function handleDotNavigationClick(e: any) {
    e.preventDefault();

    const { target } = e;
    const slide = target?.dataset.slideNumber;

    // comes back as a string
    // so convert back to a number
    setCurrentImage(Number(slide));
  }

  return (
    <div>
      <Container>
        <h2>Pictures of Caddo Lake</h2>
        <div
          role="region"
          aria-label="Photo Gallery Carousel"
          ref={ref}
          className={styles.galleryWrapper}
        >
          <div
            role="group"
            aria-roledescription="slide"
            aria-labelledby="carousel_item-1_heading"
            className={styles.slideWrapper}
          >
             {images && carouselDimensions?.width && (
              <CldImage
                width={carouselDimensions.width}
                height={isMobile ? 280 : 600}
                crop='fill'
                gravity='center'
                quality="50"
                src={images[currentImage]?.public_id}
                alt={`Testing`}
              />
             )}
          </div>
          <div>
            <CarouselPagination
              images={images}
              currentSlide={currentImage}
              clickHandler={handleDotNavigationClick}
            />
          </div>
          <CarouselNavigation />
        </div>
      </Container>
    </div>
  );
}
