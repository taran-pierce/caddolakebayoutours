'use client'

import { useRef, useState, useEffect } from 'react';
import { CldImage } from "next-cloudinary";
import Container from './Container';
import { getWindowDimensions } from '../utils/getDimensions';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './splitContent.module.scss';

export default function SplitContent({
  imageFirst,
  contentfulData,
}: {
  imageFirst: boolean,
  contentfulData: any,
}) {
  const [imageDimensions, setImageDimensions] = useState({
    height: undefined,
    width: undefined,
  });
  
  const ref: any = useRef(undefined);

  const { width: windowWidth } = getWindowDimensions();

  const {
    text,
    image: contentfulImage,
    imageSource,
    imageAltText,
  } = contentfulData.fields;

  console.log({
    contentfulData,
    text,
    contentfulImage,
    imageSource,
    imageAltText,
    imageFirst,
  });

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
            src={imageSource}
            alt={imageAltText}
          />
        )}
      </div>
    );
  };

  const TextWrapper = () => {
    return (
      <div className={styles.textWrapper}>
        {text && (
          documentToReactComponents(text)
        )}
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
