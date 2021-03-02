import React from 'react';
import PropTypes, {
  string,
  shape,
  bool,
} from 'prop-types';
import styles from './sideHug.module.css';

function SideHug(props) {
  const {
    mainHeadline,
    bodyCopy,
    image,
    imageOnLeft,
  } = props;

  return (
    <section>
      <div className={styles.container}>
        <div className={imageOnLeft ? styles.flexContainerReverse : styles.flexContainer}>
          <div className={styles.flexColumn}>
            <h2>{mainHeadline}</h2>
            <p>{bodyCopy}</p>
          </div>
          {image && (
            <div className={styles.flexColumnImage}>
             <img src={image?.src} alt={image?.altText} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

SideHug.defaultProps = {
  imageOnLeft: false,
};

SideHug.propTypes = {
  mainHeadline: string,
  bodyCopy: string,
  image: shape({
    src: string,
    altText: string,
  }),
  imageOnLeft: bool,
};

export default SideHug;