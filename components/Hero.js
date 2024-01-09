import {
  string,
  number,
} from 'prop-types';
import { CldImage } from 'next-cloudinary';

// import { 
//   Image, 
//   CloudinaryContext, 
//   Transformation,
//  } from 'cloudinary-react';

import styles from './hero.module.scss';

function Hero({
  imagePath,
  alt,
  bottom,
  minHeight,
} ) {
  return (
    <section className={styles.hero}>
      <CldImage
        width="960"
        height="465"
        crop="scale"
        src={imagePath}
        alt={'testing stuff up'}
      />
      {/* <CloudinaryContext 
        cloudName={`tpierce36`}
        secure
      >
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
      </CloudinaryContext> */}
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
