import {
  useEffect,
  useState,
  useRef,
} from 'react';
import Head from 'next/head';
import { CldImage } from 'next-cloudinary';

import styles from './hero.module.scss';

export default function Hero({
  imagePath,
  alt,
  heroImageData,
}: {
  imagePath: string,
  alt: string,
  heroImageData: any,
}) {
  const [heroDimensions, setHeroDimensions] = useState({
    height: undefined,
    width: undefined,
  });

  const ref: any = useRef(undefined);

  const currentHero = heroImageData && heroImageData.filter((hero: any) => hero.public_id === imagePath)[0];

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
    >
      {currentHero && (
        <Head>
          <link rel="preload" fetchpriority="high" as="image" href={currentHero.secure_url} type={`${currentHero.resource_type}/${currentHero.format}`} />
        </Head>
      )}
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
