import {
  string,
} from 'prop-types';
import {
  useEffect,
  useState,
  useRef,
} from 'react';
import { CldImage } from 'next-cloudinary';
import styles from './hero.module.scss';

function Hero({
  imagePath,
  alt,
} ) {
  const [heroDimensions, setHeroDimensions] = useState({
    height: undefined,
    width: undefined,
  });
  
  const ref = useRef(undefined);

  useEffect(() => {
    const { current } = ref;

    setHeroDimensions({
      height: current.clientHeight,
      width: current.clientWidth,
    });
  }, []);

  return (
    <section className={styles.hero} ref={ref}>
      {heroDimensions.height && heroDimensions.width && (
        <CldImage
          width={heroDimensions.width}
          height={heroDimensions.height}
          crop='fill'
          gravity='center'
          quality="50"
          src={imagePath}
          alt={alt}
        />
      )}
    </section>
  )
}

Hero.propTypes = {
  imagePath: string.isRequired,
  alt: string.isRequired,
}

export default Hero;
