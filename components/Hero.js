import {
  string,
  number,
} from 'prop-types';
import { 
  Image, 
  CloudinaryContext, 
  Transformation,
 } from 'cloudinary-react';

import styles from './hero.module.scss';

function Hero({
  imagePath,
  alt,
  bottom,
  minHeight,
} ) {
  return (
    <section className={styles.hero}>
      <CloudinaryContext cloudName={`tpierce36`}>
        {/* TODO bottom should not be required to get styles */}
        {bottom ? (
          <style jsx={`true`}>{`
            .hero {
              height: ${minHeight && minHeight.mobile ? minHeight.mobile : 'auto'};
            }

            .hero .img-wrapper {
              min-height: 203px;
            }

            @media (min-width: 768px) {
              .hero {
                height: ${minHeight && minHeight.tablet ? minHeight.tablet : 'auto'};
              }
            }

            @media (min-width: 992px) {
              .hero {
                height: ${minHeight && minHeight.desktop ? minHeight.desktop : 'auto'};
              }

              .hero .img-wrapper img {
                position: relative;
                bottom: ${bottom}px;
              }
            }
          `}</style>
        ) : null }
        <div className={styles.imgWrapper}>
          <Image
            publicId={imagePath}
            responsive
            width={`auto`}
            crop={`scale`}
            alt={alt}
          >
            <Transformation
              quality={`90`}
              fetchFormat={`auto`}
              gravity={`auto`}
            />
          </Image>
        </div>
      </CloudinaryContext>
    </section>
  )
}

Hero.defaultProps = {
  bottom: 0,
};

Hero.propTypes = {
  imagePath: string.isRequired,
  alt: string.isRequired,
  bottom: number,
}

export default Hero;
