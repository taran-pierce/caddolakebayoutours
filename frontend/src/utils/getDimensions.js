import { useState, useEffect } from 'react';

export function getWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState({
    height: undefined,
    width: undefined,
  });

  useEffect(() => {
    // function to set the sizes
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // set the height/width
    handleResize();

    // add listener on resize to also set the height/width
    window.addEventListener("resize", handleResize);

    // remove listerner on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
}

export default {
  getWindowDimensions,
}
