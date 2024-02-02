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
  } = contentfulData.fields;

  const hasImage = imageSource && imageAltText.length > 0;

  return (
    <section
      className={`${styles.section} ${!imageFirst ? styles.imageLast : ''}`}
    >
      <Container
        borderBottom
      >
        <div className={`${styles.grid} ${(!imageSource) ? styles.textOnly : ''}`}>
          {!imageFirst && (
            <>
              <TextBlock data={contentfulData.fields} />
              {hasImage && (<ImageBlock imageSource={imageSource} imageAltText={imageAltText} />)}
              {enableGoogleMap && (
                <div className={styles.googleMapWrapper}>
                  <GoogleMap />
                </div>
              )}
            </>
          )}
          {imageFirst && (
            <>
              {hasImage && (<ImageBlock imageSource={imageSource} imageAltText={imageAltText} />)}
              {enableGoogleMap && (
                <div className={styles.googleMapWrapper}>
                  <GoogleMap />
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
