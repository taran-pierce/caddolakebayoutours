import Container from '../Container';
import GoogleMap from '../GoogleMap';
import ImageBlock from './ImageBlock';
import TextBlock from './TextBlock';

import styles from './splitContent.module.scss';

export default function SplitContent({
  imageFirst,
  contentfulData,
}: {
  imageFirst: boolean,
  contentfulData: any,
}) {
  const {
    imageSource,
    imageAltText,
    enableGoogleMap,
    enablePriority,
  } = contentfulData.fields;

  const hasImage = imageSource && imageAltText.length > 0;

  const textColumnOnly = (!imageSource && !enableGoogleMap);

  return (
    <section
      className={`${styles.section} ${!imageFirst ? styles.imageLast : ''}`}
    >
      <Container
        borderBottom
      >
        <div className={`${styles.grid} ${(textColumnOnly) ? styles.textOnly : ''}`}>
          {!imageFirst && (
            <>
              <TextBlock data={contentfulData.fields} />
              {hasImage && (
                <ImageBlock
                  imageSource={imageSource}
                  imageAltText={imageAltText}
                  enablePriority={enablePriority}
                />
              )}
              {enableGoogleMap && (
                <div className={styles.googleMapWrapper}>
                  <GoogleMap id="splitContentMap" />
                </div>
              )}
            </>
          )}
          {imageFirst && (
            <>
              {hasImage && (
                <ImageBlock
                  imageSource={imageSource}
                  imageAltText={imageAltText}
                  enablePriority={enablePriority}
                />
              )}
              {enableGoogleMap && (
                <div className={styles.googleMapWrapper}>
                  <GoogleMap id="splitContentMap" />
                </div>
              )}
              <TextBlock data={contentfulData.fields} />
            </>
          )}
        </div>
      </Container>
    </section>
  );
};
