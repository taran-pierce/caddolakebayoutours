import { useState } from 'react';
import { 
  string,
  number,
 } from 'prop-types';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';

import styles from './imageGallery.module.scss';

function ImageGallery({
  galleryName,
  lastSlide,
}) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  
  const nextImage = ( event ) => {
    event.preventDefault();

    if ( currentSlide < lastSlide ) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const previousImage = ( event ) => {
    event.preventDefault();

    if ( currentSlide != 1 ) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleLightBox = ( event ) => {
    event.preventDefault();

    console.log('toggleLightBox');

    setLightBoxOpen(!lightBoxOpen);
  };

  return (
    <section className={styles.imageGallery}>
      <h2>Pictures of Caddo Lake</h2>
      <div className={styles.galleryContainer}>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a
                className={styles.btn}
                onClick={previousImage}
              >Previous</a>
            </li>
            <li className={styles.li}>
              <a
                className={styles.btn}
                onClick={nextImage}
              >Next</a>
            </li>
          </ul>
        </nav>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <CloudinaryContext cloudName="tpierce36">
              <a
                href={`https://res.cloudinary.com/tpierce36/image/upload/v1578238226/${galleryName}${currentSlide}.jpg`}
                onClick={toggleLightBox}
              >
                <Image
                  publicId={`${galleryName}${currentSlide}.jpg`}
                  responsive
                  width="auto"
                  crop="scale"
                  alt={`Caddo Lake #${currentSlide}`}
                  className={styles.img}
                >
                  <Transformation quality="auto" fetchFormat="auto" />
                </Image>
              </a>
            </CloudinaryContext>
          </li>
        </ul>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a 
                className={styles.btn} 
                onClick={previousImage}
              >Previous</a>
            </li>
            <li className={styles.li}>
              <a 
                className={styles.btn} 
                onClick={nextImage}
              >Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

ImageGallery.propTypes = {
  galleryName: string.isRequired,
  lastSlide: number.isRequired,
};

export default ImageGallery;
