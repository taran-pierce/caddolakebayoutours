import {
  object,
} from 'prop-types';
import TextBlock from './TextBlock';
import {
  Image,
  CloudinaryContext,
  Transformation,
} from 'cloudinary-react';

import styles from './sideHug.module.scss';

function SideHug( {
  data,
} ) {
  const {
    imageFirst,
    textData,
    image,
    googleMap,
  } = data;

  const CurrentImage = () => {
    return (
      <CloudinaryContext
        cloudName="tpierce36"
        secure
      >
        <div className={styles.imgWrapper}>
          <Image
            publicId={image.path}
            width={`auto`}
            responsive
            crop={`scale`}
            alt={image.alt}
            loading={`lazy`}
          >
            <Transformation
              quality={`auto`}
              fetchFormat={`auto`}
            />
          </Image>
        </div>
      </CloudinaryContext>
    );
  };

  return (
    <section className={styles.sideHug}>
      <div className={styles.mainContainer}>
        <div className={styles.col}>
          {imageFirst ?
            (
              // display google map if we have one
              googleMap && (
                <div>{googleMap}</div>
              ),
              // display image if we have one
              image && (
                <CurrentImage />
              )
            ) : (
              textData.map( (text, index) => (
                <div 
                  className={styles.container}
                  key={index}
                >
                  <TextBlock key={index} data={text} />
                </div>
              ))
            )
          }
        </div>
        <div className={styles.col}>
          {imageFirst ?
            (
              textData.map( (text, index) => (
                <div 
                  className={styles.container}
                  key={index}
                >
                  <TextBlock key={index} data={text} />
                </div>
              ))
            ) : (
              // display image if we have one
              image && (
                <CurrentImage />
              )
            )
          }
          {googleMap && (
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13428.266285705415!2d-94.15337171079648!3d32.7108586943788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc79227c114d5c01d!2sCaddo+Lake+Bayou+Tours!5e0!3m2!1sen!2sus!4v1528217775632"
              width="100%"
              height="460"
              frameBorder="0"
              allowFullScreen
              importance="low"
              loading="lazy"
              className={styles.iframe}
            ></iframe>
          )}
        </div>
      </div>
    </section>
  )
}

SideHug.propTypes = {
  data: object,
}

export default SideHug;
