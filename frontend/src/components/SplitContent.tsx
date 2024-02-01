import {
  useRef,
  useState,
  useEffect,
} from 'react';
import { CldImage } from "next-cloudinary";
import Container from './Container';
import Button from './Button';
import GoogleMap from './GoogleMap';
import Form from './Form';
import { getWindowDimensions } from '../utils/getDimensions';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

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
    imageSource,
    imageAltText,
    enableGoogleMap,
    enableForm,
  } = contentfulData.fields;

  const hasImage = imageSource && imageAltText.length > 0;

  // options for custom components in contentful
  const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ENTRY]: (node: any) => {
        // const { title, description } = node.data.target.fields;
        // only have one component so do need to check the type for which one to return
        const componentData = node?.data?.target?.fields;

        const {
          buttonText,
          buttonHref,
        } = componentData;

        return (
          <Button
            href={buttonHref}
            isLink
          >{buttonText}</Button>
        )
      }
    }
  };

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
          documentToReactComponents(text, options)
        )}
        {enableForm && (
          <Form />
        )}
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
      className={`${styles.section} ${!imageFirst ? styles.imageLast : ''}`}
      ref={windowWidth && windowWidth >= 992 ? null : ref}
    >
      <Container
        borderBottom
      >
        <div className={`${styles.grid} ${(!imageSource) ? styles.textOnly : ''}`}>
          {!imageFirst && (
            <>
              <TextWrapper />
              {hasImage && (<ImageWrapper />)}
              {enableGoogleMap && (
                <div className={styles.googleMapWrapper}>
                  <GoogleMap />
                </div>
              )}
            </>
          )}
          {imageFirst && (
            <>
              {hasImage && (<ImageWrapper />)}
              {enableGoogleMap && (
                <div className={styles.googleMapWrapper}>
                  <GoogleMap />
                </div>
              )}
              <TextWrapper />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
