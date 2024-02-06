import {
  useEffect,
  useState,
  useRef,
} from 'react';
import { CldImage } from 'next-cloudinary';
import { useWindowDimensions } from '../utils/useWindowDimensions';

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

  const { width } = useWindowDimensions();

  if (width && width <= 992) {
    // for performance do not even show hero at mobile or tablet
    return null;
  }

  return (
    <section
      ref={ref}
      className={styles.hero}
    >
      {heroDimensions.height && heroDimensions.width && (
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
      )}
    </section>
  );
};
