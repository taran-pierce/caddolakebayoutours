'use client'

import { useRef, useState, useEffect } from 'react';
import { CldImage } from "next-cloudinary";
import Container from './Container';
import { getWindowDimensions } from '../utils/getDimensions';

import styles from './splitContent.module.scss';

export default function SplitContent({
  image,
  textData,
  imageFirst,
}: {
  image: {
    path: string,
    alt: string,
  },
  textData: Array<object>,
  imageFirst: boolean,
}) {
  const [imageDimensions, setImageDimensions] = useState({
    height: undefined,
    width: undefined,
  });
  
  const ref: any = useRef(undefined);

  const { width: windowWidth } = getWindowDimensions();

  const ImageWrapper = () => {
    return (
      <div
        className={styles.imageWrapper}
        ref={windowWidth && windowWidth >= 992 ? ref : null}
      >
        {imageDimensions.width && (
          <CldImage
            // check window width before setting image size
            // column size becomes locked after it hits desktop
            width={windowWidth && windowWidth >= 992 ? 610 : imageDimensions.width}
            height={windowWidth && windowWidth >= 992 ? imageDimensions.height : 300}
            crop='fill'
            gravity='center'
            quality="50"
            src={image?.path}
            alt={image?.alt}
          />
        )}
      </div>
    );
  };

  const TextWrapper = () => {
    return (
      <div className={styles.textWrapper}>
        <h1>Welcome to Caddo Lake Bayou Tours!</h1>
        <h2>A lake rich with history</h2>
        <h3>Book a tour today!</h3>
        <p>Caddo Lake is steeped in history dating back to the early 1800's and one of the best ways to soak it in is with a guided boat tour. Sit back and relax while you take in the history which includes the Caddo Indian tribes that inhabited the area and the steamboat navigational trade from New Orleans to Jefferson, Texas are just some of the lakes rich history.</p>
        <p>The names of certain areas of the lake such as Alligator Bayou, Starr Ditch, Ames Spring Basin, Potters Point, Britts Gap and Government Ditch among others give the lake a certain mystic created by the characters from it's past. It creates the perfect atomosphere for fishing, relaxing or watching the sunset.</p>
        <button type="button">Book a Tour</button>
      </div>
    );
  };

  useEffect(() => {
    const { current }: any = ref;

    setImageDimensions({
      height: current?.clientHeight,
      width: current?.clientWidth,
    });
  }, []);

  return (
    <section
      className={!imageFirst ? styles.imageLast : ''}
      ref={windowWidth && windowWidth >= 992 ? null : ref}
    >
      <Container
        borderBottom
      >
        <div className={styles.grid}>
          {!imageFirst && (
            <>
              <TextWrapper />
              <ImageWrapper />
            </>
          )}
          {imageFirst && (
            <>
              <ImageWrapper />
              <TextWrapper />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
