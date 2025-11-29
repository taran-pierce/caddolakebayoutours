import { useState } from 'react';
import styles from './faceBookButton.module.scss';

export default function FaceBookButton() {
  const [sdkLoaded, setSdkLoaded] = useState(false);

  const loadFacebookSdk = () => {
    if (window.FB) {
      setSdkLoaded(true);
      window.FB.XFBML.parse();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.FB.init({
        xfbml: true,
        version: "v20.0",
      });

      setSdkLoaded(true);
      window.FB.XFBML.parse();
    };

    document.body.appendChild(script);
  };

  return (
    <div className={styles.faceBookWrapper}>
      {sdkLoaded ? (
        <div
          className="fb-like"
          data-href="https://www.facebook.com/caddotours/"
          data-width="300"
          data-layout="button"
          data-action="like"
          data-size="large"
          data-share="true"
        />
      ) : (
        <button className={styles.fbCustomLikeButton} onClick={loadFacebookSdk}>
          <svg
            className={styles.fbIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.03 3.66 9.21 8.44 9.93v-7.03H8.09v-2.9h2.35V9.41c0-2.33 1.39-3.62 3.52-3.62.99 0 2.03.18 2.03.18v2.23h-1.14c-1.13 0-1.48.7-1.48 1.42v1.7h2.52l-.4 2.9h-2.12V22c4.77-.72 8.44-4.9 8.44-9.93z"
            />
          </svg>
          Like
        </button>
      )}
    </div>
  );
}
