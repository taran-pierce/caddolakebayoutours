import {
  useState,
  useEffect,
} from 'react';
import { bool } from 'prop-types';
import styles from './facebookLikeButton.module.scss';

function FacebookLikeButton({
  listItemRequired,
}) {
  // only going to want to load this after the DOM is loaded
  // facebook modifies the DOM after its loaded in
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const CoreButton = () => {
    return (
      <>
        <div
          className={`fb-like`}
          data-href="//www.facebook.com/caddotours/"
          data-width="170px"
          data-layout="button"
          data-action="like"
          data-size="large"
          data-show-faces="true"
          data-share="true"
        />
      </>
    )
  };

  const LikeButtonWrapper = () => {
    const LikeButton = () => {
      return listItemRequired ? (
        <>
          <li className={styles.socialLink}>
            <CoreButton />
          </li>
        </>
      ) : (
        <CoreButton />
      );
    };
    
    return (
      <LikeButton />
    );
  };

  return (
    <>
      {domLoaded && (
        <>
          <LikeButtonWrapper />
        </>
      )}
    </>
  );
}

FacebookLikeButton.defaultProps = {
  listItemRequired: false,
};

FacebookLikeButton.propTypes = {
  listItemRequired: bool,
};

export default FacebookLikeButton;
