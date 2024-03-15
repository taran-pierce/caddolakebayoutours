import {
  useEffect,
  useState,
  useRef,
} from 'react';
import { CldImage } from 'next-cloudinary';

import styles from './hero.module.scss';

export default function Hero({
  imagePath,
  alt,
}: {
  imagePath: string,
  alt: string,
}) {
  const [heroDimensions, setHeroDimensions] = useState({
    height: undefined,
    width: undefined,
  });

  const ref: any = useRef(undefined);

  useEffect(() => {
    const { current }: any = ref;

    setHeroDimensions({
      height: current?.clientHeight,
      width: current?.clientWidth,
    });
  }, []);

  return (
    <section
      ref={ref}
      className={styles.hero}
      data-testid='hero'
    >
      {(heroDimensions && heroDimensions.height && heroDimensions.height > 0) 
        && (heroDimensions && heroDimensions.width && heroDimensions.width > 0)
        && (
          <CldImage
            width={heroDimensions.width}
            height={heroDimensions.height}
            crop='fill'
            gravity='center'
            quality="50"
            src={imagePath}
            alt={alt}
            priority={true}
            format='webp'
          />
        )
      }
    </section>
  );
};
