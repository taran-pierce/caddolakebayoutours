import {
  useEffect,
  useState,
  useRef,
} from 'react';
import Head from 'next/head';
import {
  CldImage,
  getCldImageUrl,
} from 'next-cloudinary';

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

  // filter to find the hero selected from Contentful
  // will be an array of heros, need the matching one for this page
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
      {currentHero && heroDimensions.height && (
        <Head>
          <link
            rel="preload"
            fetchpriority="high"
            as="image"
            // getCldImageUrl will fetch the matching URL with the transforms that is called below
            // this way the correct image url can be preloaded since it is above the fold
            href={getCldImageUrl({
              width: heroDimensions.width,
              height: heroDimensions.height,
              src: currentHero.public_id,
              quality: '50',
              format: 'webp',
              gravity: 'center',
              crop: 'fill',
            })}
            type={`${currentHero.resource_type}/${currentHero.format}`}
          />
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
