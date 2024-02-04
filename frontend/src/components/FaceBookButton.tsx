import {
  useEffect,
  useState,
} from 'react';
import Script from 'next/script';

export default function FaceBookButton() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  if (!hasLoaded) {
    return null;
  }

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
      <Script
        async
        defer
        crossOrigin="anonymous"
        src="//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0"
        onReady={() => {
          console.log('this ran');
        }}
      />
    </>
  );
}
